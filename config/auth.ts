/**
 * Config source: https://git.io/JY0mp
 *
 * Feel free to let us know via PR, if you find something broken in this config
 * file.
 */

import type { AuthConfig } from '@ioc:Adonis/Addons/Auth'
import { RedisTokenProviderConfig } from '@ioc:Adonis/Addons/Auth'
import { DatabaseTokenProviderConfig } from '@ioc:Adonis/Addons/Auth'
import Env from '@ioc:Adonis/Core/Env'

const createProvider = () => {
  const driver = Env.get('AUTH_DRIVER', 'redis')

  switch (driver) {
    case 'database':
      return {
        type: 'api',
        driver: 'database',
        table: 'api_tokens',
        foreignKey: 'auth_id',
      } as DatabaseTokenProviderConfig
    case 'redis':
      return {
        type: 'api',
        driver: 'redis',
        redisConnection: 'default',
        foreignKey: 'auth_id',
      } as RedisTokenProviderConfig
    default:
      throw 'Unable to get provider'
  }
}

/*
|--------------------------------------------------------------------------
| Authentication Mapping
|--------------------------------------------------------------------------
|
| List of available authentication mapping. You must first define them
| inside the `contracts/auth.ts` file before mentioning them here.
|
*/
const authConfig: AuthConfig = {
  guard: 'user',
  guards: {
    user: {
      driver: 'oat',
      tokenProvider: createProvider(),
      provider: {
        driver: 'lucid',
        identifierKey: 'id',
        uids: ['username'],
        model: () => import('App/Models/User'),
      },
    },
  },
}

export const expiry = Env.get('APP_KEY', '1 day')

export default {
  ...authConfig,
  expiry,
}
