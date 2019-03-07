import Router from "koa-router";

const router = new Router();

/**
 * Bind route object to koa-router
 * @param route
 * @param parentPath
 */
const bingRouter = (route: any, parentPath: string = '') => {
    let { path, method, controller, children } = route
    if (path !== undefined && path !== null) {
        const actualPath = parentPath === '/' ? `/${path}` : `${parentPath}/${path}`
        if (controller) {
            switch (method) {
                case 'post':
                    router.post(actualPath, controller)
                    break
                case 'delete':
                    router.delete(actualPath, controller)
                    break
                case 'put':
                    router.put(actualPath, controller)
                    break
                case 'get':
                default:
                    router.get(actualPath, controller)
                    break
            }
        }
        if (route.children && route.children.length > 0) {
            for (const child of route.children) {
                bingRouter(child, actualPath)
            }
        }
    }
    
}

/**
 * Register koa-router as koa middleware
 * @param route 
 * @param app 
 */
const register = (route: any, app: any) => {
    bingRouter(route)
    app.use(router.routes())
}

export default register
