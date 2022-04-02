import {MigrationInterface, QueryRunner, Table} from "typeorm";
import { Query } from "typeorm/driver/Query";

export class CreateParticipants1648229373695 implements MigrationInterface {

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
                        name:"FKRoomId",
                        referencedTableName:'chat',
                        referencedColumnNames:['id'],
                        columnNames:["chat_id"],
                        onDelete:'SET NULL',
                        onUpdate:'SET NULL',
                    },
                    {
                        name:"FKUserId",
                        referencedTableName:'user',
                        referencedColumnNames:['id'],
                        columnNames:["user_id"],
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
