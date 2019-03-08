import { Schema } from "mongoose"
import mongoose from 'mongoose'

import {preSave} from './common/schema-util'

const User = new Schema({
  name: String,
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

User.pre("save", function(next:any) {
  preSave(this)
  next()
})

export default User
