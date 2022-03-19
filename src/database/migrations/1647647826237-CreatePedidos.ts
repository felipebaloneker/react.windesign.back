import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePedidos1647647826237 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'pedidos',
                columns:[
                    {
                        name:'id',
                        type:'uuid',
                        isPrimary:true
                    },
                    {
                        name:'author_id',
                        type:'uuid'
                    },
                    {
                        name:'detalhes',
                        type:'varchar'
                    },
                    {
                        name:'setor',
                        type:'varchar'
                    },
                    {
                        name:'status',
                        type:'varchar'
                    },
                    {
                        name:'created_at',
                        type:'timestamp',
                        default:'now()'
                    }
                ],
                foreignKeys:[
                    {
                        name:"FKAuthorIdCompliments",
                        referencedTableName:"users",
                        referencedColumnNames:["id"],
                        columnNames:["author_id"],
                        onDelete:"SET NULL",
                        onUpdate:"SET NULL"
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("pedidos");
    }

}
