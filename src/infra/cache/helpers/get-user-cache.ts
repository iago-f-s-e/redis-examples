import { IUser } from '@src/infra/entities'
import { promisify } from 'util'
import { redisClient } from '../config'
import { formatCache } from './format'

export async function getUserCache (userId: string) {
  const syncRedisGet = promisify(redisClient.get).bind(redisClient)

  const userCache = await syncRedisGet(userId)

  return formatCache<IUser>(userCache as string)
}
