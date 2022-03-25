import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMessage1647649699974 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'message',
                columns:[
                    {
                        name:'id',
                        type:'uuid',
                        isPrimary:true
                    },
                    {
                        name:'author_id',
                        type:'uuid',
                    },
                    {
                        name:'chat_id',
                        type:'uuid',
                    },
                    {
                        name:'body',
                        type:'varchar'
                    },
                    {
                        name:'created_at',
                        type:'timestamp',
                        default:'now()'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
