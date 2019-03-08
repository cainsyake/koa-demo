import Koa from 'koa';
import ControllerRegister from './controller'
import Config from './config'
import database from './database'



const app = new Koa();

database()

// Register controller
ControllerRegister(app)



app.listen(Config.port);

console.log(`Server running on port ${Config.port}`);
