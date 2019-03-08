import mongoose from "mongoose"

import UserService from "../../service/base/user"

const saveInfo = async () => {
  const UserModel = mongoose.model("User")
  const user = new UserModel({
    name: "测试员2"
  })
  return await user.save()
}

const user = {
  path: "user",
  children: [
    {
      path: "add",
      method: "get",
      controller: async (ctx: any) => {
        const data = {
          time: new Date()
        }
        UserService.save("测试员3")
        ctx.body = data
      }
    },
    {
      path: "find",
      method: "get",
      controller: async (ctx: any) => {
        ctx.body = await UserService.findAll()
      }
    }
  ]
}

export default user
