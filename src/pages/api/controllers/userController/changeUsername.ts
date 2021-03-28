import { NextApiRequest, NextApiResponse } from 'next'

import * as jwt from '../../../../utils/jwt'
import bcrypt from 'bcryptjs'
import connect from '../../../../utils/database/db'
import { User } from '../../../../utils/models/User'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const token = req.cookies.authorization
    // const [, token] = req.headers.authorization.split(' ')

    const { password, name } = req.body

    try {
      await connect()

      const payload = await jwt.verify(token)
      const user = await User.findById(payload.user).select('+password');

    
      if (!await bcrypt.compare(password, user.password)) {
        return res.status(400).send({ message: 'Password invalido' });
      }

      await User.findOneAndUpdate({ email: user.email}, { name: name },
      {new: true}).then(response => {
        return res.json(response.name)
      })

    } catch (error) {
      console.log(error)
      res.json(error)
    }
  }
}