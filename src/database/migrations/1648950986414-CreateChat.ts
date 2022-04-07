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
                            referencedTableName:"order",
                            referencedColumnNames:["id"],
                            columnNames:["order"],
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

