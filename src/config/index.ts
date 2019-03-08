import development from './development'
import test from './test'
import production from './production'

let allConfig:any = {
  development,
  test,
  production
}

const env = process.env.NODE_ENV || 'development'

console.log(`Env:${env}`)

let exportConfig = allConfig[env]

export default exportConfig

