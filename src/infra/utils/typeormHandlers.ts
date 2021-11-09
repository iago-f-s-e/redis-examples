import { getRepository, ObjectType, Repository, SelectQueryBuilder } from 'typeorm'

export interface TypeormHandlers<T> {
  queryBuilder: SelectQueryBuilder<T>,
  repository: Repository<T>
}

export function typeormHandlers<T> (entity: ObjectType<T>): TypeormHandlers<T> {
  const repository = getRepository<T>(entity)

  return {
    queryBuilder: repository.createQueryBuilder(),
    repository
  }
}
