import mongoose from 'mongoose'

import { mongoDB } from '../config/config.json'


export default async function dbConnect() {
  await mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
}

// dbConnect()