import mongoose from "mongoose"

const saveInfo = async () => {
  const UserModel = mongoose.model("User")
  const user = new UserModel({
    name: "测试员2"
  })
  return await user.save()
}

const home = {
  path: "add",
  method: "get",
  controller: async (ctx: any) => {
    const data = {
      time: new Date()
    }
    saveInfo()
    ctx.body = data
  },
  children: [
    {
      path: "a1",
      method: "get",
      controller: async (ctx: any) => {
        ctx.body = "Hi, this is a1"
      }
    }
  ]
}

export default home
