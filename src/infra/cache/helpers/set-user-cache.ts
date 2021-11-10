import { IUser } from '@src/infra/entities'
import { promisify } from 'util'
import { redisClient } from '../config'
import { formatPayload } from './format'

export function setUserCache (userId: string, user: IUser) {
  const syncRedisGet = promisify(redisClient.set).bind(redisClient)

  return syncRedisGet(userId, formatPayload(user))
}
