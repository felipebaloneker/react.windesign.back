import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateChat1648950986414 implements MigrationInterface {
        public async up(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.createTable(
                new Table({
                    name:'chat',
                    columns:[
                        {
                            name:'id',
                            type:'uuid',
                            isPrimary:true
                        },
                        {
                            name:'order',
                            type:'uuid'
                        }
                    ],
                    foreignKeys:[
                        {
                            name:"FKRequestChat",
                            referencedTableName:"request",
                            referencedColumnNames:["id"],
                            columnNames:["request"],
                            onDelete:"SET NULL",
                            onUpdate:"SET NULL"
                        }
                    ]
                })
            )
        }
    
        public async down(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.dropTable('chat')
        }
    
    }    

