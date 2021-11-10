import { User } from '@src/infra/entities'
import { typeormHandlers } from '@src/infra/utils'
import { UserRepository } from '@src/repositories'
import { UserServices } from '@src/services'
import { Services } from '@src/types/services'

export function servicesFactory (): Services {
  return {
    user: new UserServices(new UserRepository(typeormHandlers(User)))
  }
}
