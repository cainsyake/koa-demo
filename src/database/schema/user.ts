import { Schema } from "mongoose"
import mongoose from 'mongoose'

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
  preFn(this)
  next()
})

const preFn = (data: any) => {
  if (data.isNew) {
    data.name
    data.meta.createdAt = data.meta.updatedAt = Date.now()
  } else {
    data.meta.updatedAt = Date.now()
  }
  return data
}

export default User
// module.exports = mongoose.model('User', User)
