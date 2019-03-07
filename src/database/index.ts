import mongoose from 'mongoose'
import ServerConfig from '../config/server'

import UserSchema from './schema/user'

const database = () => {
  // require('./schema/user')
  mongoose.model('User', UserSchema)

  mongoose.set('debug', true)

  mongoose.connect(ServerConfig.dbPath, { useNewUrlParser: true })

  mongoose.connection.on('disconnected', () => {
    mongoose.connect(ServerConfig.dbPath, { useNewUrlParser: true })
  })
  mongoose.connection.on('error', err => {
    console.error(err)
  })

  mongoose.connection.on('open', async () => {
    console.log('Connected to MongoDB ', ServerConfig.dbPath)
  })
}

export default database
