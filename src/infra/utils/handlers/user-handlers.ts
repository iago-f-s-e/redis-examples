import { TypeormHandlers } from '../typeormHandlers'
import { User } from '../../entities/user'

export interface UserHandlers extends TypeormHandlers<User> {}
