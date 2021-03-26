    import { NextApiRequest, NextApiResponse } from 'next'

    import * as jwt from '../../../../utils/jwt'
    import connect from '../../../../utils/database/db'
    import { User } from '../../../../utils/models/User'

    export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
    const token = req.cookies.authorization
    // const [, token] = req.headers.authorization.split(' ') 

    // const { token } = req.body

    try { 
    await connect()

    const payload = await jwt.verify(token)
    const user = await User.findById(payload.user)

    const notes = await User.findOne({ _id: user._id })

    return res.json(notes.note)

    } catch (err) {
    console.log(err)
    }
    }
  }