import { IUser } from '@src/infra/entities'
import { UserRepository } from '@src/repositories'

export class UserServices {
  constructor (private readonly userRepository = new UserRepository()) {}

  public add (name: string): Promise<IUser> {
    return this.userRepository.insert(name)
  }
}
