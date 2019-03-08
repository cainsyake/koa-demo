import Register from './register'

// controller modules
import user from './module/user'

// main route object
const route = {
    path: '',
    controller: async (ctx: any) => {
        ctx.body = "Hi, this is index"
    },
    children: [
      user
    ]
}

// Init koa-router
const initRouter = (app: any) => {
    Register(route, app)
}

export default initRouter
