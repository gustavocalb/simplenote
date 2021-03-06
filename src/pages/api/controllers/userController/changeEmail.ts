import { NextApiRequest, NextApiResponse } from 'next'

import * as jwt from '../../../../utils/jwt'
import bcrypt from 'bcryptjs'
import connect from '../../../../utils/database/db'
import { User } from '../../../../utils/models/User'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const token = req.cookies.authorization
    // const [, token] = req.headers.authorization.split(' ')

    const { password, email } = req.body

    try {
      await connect()

      const payload = await jwt.verify(token)
      const userr = await User.findById(payload.user).select('+password');

      const user = await User.findOne({ email });

      if (user) {
        return res.status(400).send({ message: 'E-mail invalido' });
      }
    
      if (!await bcrypt.compare(password, userr.password)) {
        return res.status(400).send({ message: 'Password invalido' });
      }

      await User.findOneAndUpdate({ email: userr.email}, { email: email },
      {new: true}).then(response => {
        return res.json(response.email)
      })

    } catch (error) {
      console.log(error)
      res.json(error)
    }
  }
}