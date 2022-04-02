import { Entity, PrimaryColumn, Column, JoinColumn, ManyToMany } from "typeorm";
import {v4 as uuid} from 'uuid';
import {Chat} from './Chat';
import { User } from "./Users";

@Entity("Participants")
class Participants{
    @PrimaryColumn()
    readonly id: string;

    @Column()
    user_id:string;
    @JoinColumn({name:"user_id"})
    @ManyToMany(()=> User)
    userId: User;

    @Column()
    chat_id: string;
    @JoinColumn({name:"chat_id"})
    @ManyToMany(()=> Chat)
    chatId: Chat;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}
export { Participants}