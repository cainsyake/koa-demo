import mongoose from "mongoose"

const query = async (model: string) => {
  const CustomModel = mongoose.model(model)
  return await CustomModel.find().exec()
}

export default {
  query
}
