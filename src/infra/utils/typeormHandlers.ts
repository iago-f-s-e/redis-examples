import { getConnection, getRepository, ObjectType, Repository, SelectQueryBuilder } from 'typeorm'
import { QueryResultCache } from 'typeorm/cache/QueryResultCache'

export interface TypeormHandlers<T> {
  queryBuilder: SelectQueryBuilder<T>,
  repository: Repository<T>
  cache: QueryResultCache
}

export function typeormHandlers<T> (entity: ObjectType<T>): TypeormHandlers<T> {
  const repository = getRepository<T>(entity)

  return {
    cache: getConnection().queryResultCache as QueryResultCache,
    queryBuilder: repository.createQueryBuilder(),
    repository
  }
}
