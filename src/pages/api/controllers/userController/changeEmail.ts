import { NextApiRequest, NextApiResponse } from 'next'

import * as jwt from '../../../../utils/jwt'
import bcrypt from 'bcryptjs'
import connect from '../../../../utils/database/db'
import { User } from '../../../../utils/models/User'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const token = req.cookies.authorization
    // const [, token] = req.headers.authorization.split(' ')

    const { password } = req.body

    try {
      await connect()

      const payload = await jwt.verify(token)
      const user = await User.findById(payload.user, function(err, doc) {
        doc.password = password

        doc.save()
      })

    } catch (error) {

    }
  }
}