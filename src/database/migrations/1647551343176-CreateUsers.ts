import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1647551343176 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "email",
            type: "varchar",
          },
          {
            name: "password",
            type: "varchar",
          },
          {
            name: "type",
            type: "varchar",
          },
          {
            name: "juridico",
            type: "varchar",
          },
          {
            name: "phone",
            type: "varchar",
          },
          {
            name: "cpf",
            type: "varchar",
          },
          {
            name: "cnpj",
            type: "varchar",
          },
          {
            name: "birthday",
            type: "varchar",
          },
          {
            name: "address",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
