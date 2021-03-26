import { Schema, model, Document } from 'mongoose'
import bcrypt from 'bcryptjs'

interface NoteTypes extends Document {
  name?: string;
  email?: string;
  password?: string;
  avatar?: string;
  length?: number;
  note?: [{
    note_index?: string;
    title?: string;
    description?: string;
  }];
}

const UserSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  avatar: {
    type: String,
    default: 'icons/user.svg'
  },
  length: {
    type: Number,
    default: -1
  },
  note: [{
    note_index: String,
    title: String,
    description: String
  }]
})

UserSchema.pre('save', async function <UserInterface>(next) {
  if (!this.isModified('password')) return next();
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  next();
});

export const User = model<NoteTypes>('User', UserSchema);