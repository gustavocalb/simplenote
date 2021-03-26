import * as jwt from '../../../../utils/jwt'

export default async (req, res, next) => {
  const [, token] = req.headers.authorization.split(' ')

  if(!token) return res.status(401).send({ error: 'No token provided' })

  jwt.verify(token)

  next()
}