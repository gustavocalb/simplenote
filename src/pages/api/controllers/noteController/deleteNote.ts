import { NextApiRequest, NextApiResponse } from 'next'

import * as jwt from '../../../../utils/jwt'
import connect from '../../../../utils/database/db'
import { User } from '../../../../utils/models/User'

import db from '../../../../utils/database/db'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const token = req.cookies.authorization
    await connect()

    const payload = await jwt.verify(token)
    const user = await User.findById(payload.user)

    const { note_index } = req.body;
  

    await User.findOneAndUpdate({_id: user._id, "note.note_index": String(note_index) }, {
      $pull: { 
        "note": { 
          "note_index": String(note_index)
        }
      }
    }).then(response => {
      res.json(response)
    })
  } 
}