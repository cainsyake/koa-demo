import mongoose from "mongoose"

const save = async (name: string) => {
  const UserModel = mongoose.model("User")
  const user = new UserModel({
    name: name
  })
  return await user.save()
}

const findAll = async () => {
  const UserModel = mongoose.model("User")
  return await UserModel.find().exec()
}

export default {
  save,
  findAll
}
