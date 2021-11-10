import { User } from '@src/infra/entities'
import { UserHandlers } from '@src/infra/utils'

export class UserRepository {
  constructor (private readonly userHandlers: UserHandlers) {}

  public async insert (name: string): Promise<User> {
    return this.userHandlers
      .repository
      .save(this.userHandlers.repository.create({ name }))
  }
}
