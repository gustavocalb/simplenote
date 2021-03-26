import { NextApiRequest, NextApiResponse } from 'next'

import * as jwt from '../../../../utils/jwt'
import connect from '../../../../utils/database/db'
import { User } from '../../../../utils/models/User'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'PUT') {
    const token = req.cookies.authorization
    // const [, token] = req.headers.authorization.split(' ')
  
      try {
        await connect()

        const payload = await jwt.verify(token)
        const user = await User.findById(payload.user)
  
        const { title, description, note_index } = req.body;
        
       const promise = await User.findOne({ _id: user._id, "note.note_index": String(note_index) }, function(err, data) {
         if (err) {
          return res.status(400).send({ error: err})
        }
        console.log(data.note)

        console.log('note', note_index)

         const note = data.note.filter(item => item.note_index === String(note_index))

         note[0].title = title
         note[0].description = description

        //  console.log(note)

         data.save()
       }, {upsert: true, new: true}).then(response => {
         res.json(response)
       }).catch(error => {
         res.json(error)
       })
  
       } catch (error) {
        console.log(error)
      }
    }
}