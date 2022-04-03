import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateParticipants1648951051548 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.createTable(
                new Table({
                    name:'participants',
                    columns:[
                        {
                            name:'id',
                            type:'uuid',
                            isPrimary:true
                        },
                        {
                            name:'user_id',
                            type:'uuid',
                        },
                        {
                            name:'chat_id',
                            type:'uuid',
                        }
                    ],
                    foreignKeys:[
                        {
                            name:"FKUserId",
                            referencedTableName:'users',
                            referencedColumnNames:['id'],
                            columnNames:["user_id"],
                            onDelete:'SET NULL',
                            onUpdate:'SET NULL',
                        },
                        {
                            name:"FKChatIdParticipants",
                            referencedTableName:'chat',
                            referencedColumnNames:['id'],
                            columnNames:["chat_id"],
                            onDelete:'SET NULL',
                            onUpdate:'SET NULL',
                        }
                    ]
                })
            )
        }
    
        public async down(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.dropTable('participants')
        }
    
    }
