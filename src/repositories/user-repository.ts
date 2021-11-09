import { User } from '@src/infra/entities'
import { getRepository } from 'typeorm'

export class UserRepository {
  constructor (private readonly repository = getRepository(User)) {}

  public async insert (name: string): Promise<User> {
    return this.repository.save(this.repository.create({ name }))
  }
}
