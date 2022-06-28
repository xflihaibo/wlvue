import { Env } from 'loca-mfe-core'

export const getPath = () => {
  const env = Env.getEnv()
  switch (env) {
    case 'dev':
      return 'https://pe-fe-gateway-dev.nio.com/pe/bff/gateway'
    case 'test':
      return 'https://gateway-front-sit.nioint.com/swc_webredirect/100157'
    case 'stg':
      return 'https://gateway-front-stg.nioint.com/swc_webredirect/100157'
    case 'prod':
      return 'https://gateway-front.nio.com/swc_webredirect/100157'
    default:
      return 'https://gateway-front-stg.nioint.com/swc_webredirect/100157'
  }
}

export const BASE_API = `${getPath()}/app/api`;
