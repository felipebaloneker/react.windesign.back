import { Column, Entity, PrimaryColumn, CreateDateColumn} from "typeorm";
import {v4 as uuid} from 'uuid'
@Entity('Users')
class User{
    @PrimaryColumn()
    readonly id:string;

    @Column()
    name:string;
    
    @Column()
    email:string;

    @Column()
    password:string;

    @Column()
    usertype:string;

    @CreateDateColumn()
    created_at:Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}
export {User}