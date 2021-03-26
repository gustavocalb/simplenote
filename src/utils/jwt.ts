import jwt from 'jsonwebtoken'

const secret = '847f72f244f42d6296c8aef04e2b1d7b'

export const sign = payload => jwt.sign(payload, secret, { expiresIn: 86400 })
export const verify = token => jwt.verify(token, secret)
