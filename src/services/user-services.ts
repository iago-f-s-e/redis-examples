import { IUser } from '@src/infra/entities'
import { UserRepository } from '@src/repositories'

export class UserServices {
  constructor (private readonly userRepository: UserRepository) {}

  public async add (name: string): Promise<IUser> {
    await this.userRepository.clearCache('all-users')

    return this.userRepository.insert(name)
  }

  public findById (userId: string): Promise<IUser | undefined> {
    return this.userRepository.findById(userId)
  }

  public findAll (): Promise<IUser[]> {
    return this.userRepository.findAll()
  }
}
