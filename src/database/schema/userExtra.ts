import { Schema } from "mongoose"
import mongoose from 'mongoose'

import {preSave} from './common/schema-util'

const UserExtra = new Schema({
  age: Number,
  userId: String,
  meta: {
    createdAt: {
      type: Date,
      default: Date.now()
    },
    updatedAt: {
      type: Date,
      default: Date.now()
    }
  }
})

UserExtra.pre("save", function(next:any) {
  preSave(this)
  next()
})

export default UserExtra
