import {Entity, PrimaryColumn, Column, CreateDateColumn, JoinColumn, ManyToOne} from 'typeorm';
import {v4 as uuid} from 'uuid';
import { Request } from './Request';

@Entity('Chat')
class Chat{
    @PrimaryColumn()
    readonly id: string;

    @Column()
    request:string;

    @JoinColumn({name:'request'})
    @ManyToOne(()=>Request)
    requestId : Request

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}
export {Chat}