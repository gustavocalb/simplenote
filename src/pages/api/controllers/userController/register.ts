import { NextApiRequest, NextApiResponse } from 'next'

import * as jwt from '../../../../utils/jwt'
import connect from '../../../../utils/database/db'
import { User } from '../../../../utils/models/User'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const { name, email, password } = req.body
  
      if (!name || !email || !password) {
        return res.status(400).json({ error: 'Missing body parameter' });
  
      }
  
      if (name == ' ' || email == ' ' || password == ' ') {
        return res.status(400).json({ error: 'Você não pode deixar um campo em branco' });
      }

        await connect()
  
        if (await User.findOne({ email })) {
          return res.status(400).send({ error: "Esse usuario já existe" });
        }
  
        const user = await User.create(req.body)
  
        const token = jwt.sign({ user: user.id });
  
        user.password = undefined
    
        res.json({ user, token })
    } catch (err) {
      console.log(err)
      res.send({ message: "error"  })
    }
  }
}