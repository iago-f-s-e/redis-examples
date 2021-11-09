import { MigrationInterface, QueryRunner } from 'typeorm'

export class UserTable1636485091365 implements MigrationInterface {
  name = 'UserTable1636485091365'

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE TABLE "user" ("user_id" uuid NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_758b8ce7c18b9d347461b30228d" PRIMARY KEY ("user_id"))')
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "user"')
  }
}
