import { User } from '@src/infra/entities'
import { UserHandlers } from '@src/infra/utils'

type CacheIdentifiers = 'user-by-id' | 'all-users'

export class UserRepository {
  constructor (private readonly userHandlers: UserHandlers) {}

  public clearCache (identifiers: CacheIdentifiers | CacheIdentifiers[]): Promise<void> {
    const isIdentifierArray = Array.isArray(identifiers)

    if (isIdentifierArray) return this.userHandlers.cache.remove(identifiers)

    return this.userHandlers.cache.remove([identifiers])
  }

  public findById (userId: string): Promise<User | undefined> {
    return this.userHandlers.repository.findOne({ where: { userId } })
  }

  public findAll (): Promise<User[]> {
    return this.userHandlers.repository.find({ cache: { id: 'all-users', milliseconds: 20000 } })
  }

  public insert (name: string): Promise<User> {
    return this.userHandlers
      .repository
      .save(this.userHandlers.repository.create({ name }))
  }
}
