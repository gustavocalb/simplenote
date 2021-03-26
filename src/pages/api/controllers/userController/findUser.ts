import { NextApiRequest, NextApiResponse } from 'next'

import * as jwt from '../../../../utils/jwt'
import bcrypt from 'bcryptjs'
import connect from '../../../../utils/database/db'
import { User } from '../../../../utils/models/User'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const token = req.cookies.authorization
    // const [, token] = req.headers.authorization.split(' ')

    try {
      await connect()

      const payload = await jwt.verify(token)
      const user = await User.findById(payload.user)

      return res.json(user)


    } catch (error) {
      console.log(error)
    }
  }
}