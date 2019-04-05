import mongoose from "mongoose"

const save = async (name: string) => {
  const UserModel = mongoose.model("User")
  const UserExtra = mongoose.model('UserExtra')
  const user = new UserModel({
    name: name
  })
  const userExtra = new UserExtra({
    userId: '5c81141be47ce33eacfa8611',
    age: 23
  })
  return Promise.all([
    user.save(),
    userExtra.save()
  ])
}

const findAll = async () => {
  const UserModel = mongoose.model("User")
  return await UserModel.find().exec()
}

export default {
  save,
  findAll
}
