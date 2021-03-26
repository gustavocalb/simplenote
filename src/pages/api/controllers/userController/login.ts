import { NextApiRequest, NextApiResponse } from 'next'

import * as jwt from '../../../../utils/jwt'
import bcrypt from 'bcryptjs'
import connect from '../../../../utils/database/db'
import { User } from '../../../../utils/models/User'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
  
      const { email, password } = req.body;
      
      await connect()
    
      const user = await User.findOne({ email }).select('+password');
    
      if (!user) {
        return res.status(400).send({ message: 'Usuario não encontrado' });
      }
    
      if (!await bcrypt.compare(password, user.password)) {
        return res.status(400).send({ message: 'Password invalido' });
      }
    
      user.password = undefined;
    
      const token = jwt.sign({ user: user.id })
  
      return res.json({
        user,
        token
      })
    } catch (err) {
      console.log(err)
    }
  }
}