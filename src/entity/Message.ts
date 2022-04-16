import {Entity, PrimaryColumn, Column, CreateDateColumn, JoinColumn, ManyToMany, } from 'typeorm';
import {v4 as uuid} from 'uuid';
import { Chat } from './Chat';
import { User } from './User';

@Entity('message')
class Message{
    @PrimaryColumn()
    readonly id: string;

    @Column()
    author_id: string;
    
    @JoinColumn({name:"author_id"})
    @ManyToMany(()=> User)
    authorId: User;

    @Column()
    chat_id: string;

    @JoinColumn({name:"chat_id"})
    @ManyToMany(()=> Chat)
    chatId: Chat;

    @Column()
    body: string;
    
    @Column()
    type:string;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}
export { Message }