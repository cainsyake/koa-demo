import Register from './register'

// controller modules
import home from './home'

// main route object
const route = {
    path: '',
    controller: async (ctx: any) => {
        ctx.body = "Hi, this is index"
    },
    children: [
        home
    ]
}

// Init koa-router
const initRouter = (app: any) => {
    Register(route, app)
}

export default initRouter