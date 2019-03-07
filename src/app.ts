import Koa from 'koa';
import ControllerRegister from './controller'
import ServerConfig from './config/server'
import database from './database'



const app = new Koa();

database()

// Register controller
ControllerRegister(app)



app.listen(ServerConfig.port);

console.log(`Server running on port ${ServerConfig.port}`);
