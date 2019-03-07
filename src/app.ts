import Koa from 'koa';
import ControllerRegister from './controller'
import ServerConfig from './config/server'

const app = new Koa();

// Register controller
ControllerRegister(app)

app.listen(ServerConfig.port);

console.log(`Server running on port ${ServerConfig.port}`);