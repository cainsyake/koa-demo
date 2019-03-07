const home = {
  path: 'a',
  method: 'get',
  controller: async (ctx: any) => {
    const data = {
      time: new Date()
    }
    ctx.body = data
  },
  children: [
    {
      path: 'a1',
      method: 'get',
      controller: async (ctx: any) => {
        ctx.body = "Hi, this is a1"
      }
    }
  ]
}

export default home