import { Column, Entity, PrimaryColumn } from 'typeorm'
import { IUser } from './dtos'

@Entity('user')
export class User implements IUser {
  @PrimaryColumn({ type: 'uuid', name: 'user_id' })
  userId!: string

  @Column({ type: 'varchar' })
  name!: string
}
