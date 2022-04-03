import { Entity, PrimaryColumn, Column, CreateDateColumn, JoinColumn, ManyToOne } from "typeorm";
import {v4 as uuid} from 'uuid';
import {Category} from './Category';
import {User} from './User';

@Entity("Request")
class Request{
    @PrimaryColumn()
    readonly id: string;

    @Column()
    author_id:string;

    @JoinColumn({name:"author_id"})
    @ManyToOne(()=> User)
    authorId: User;

    @Column()
    details: string;

    @Column()
    category_id:string;

    @JoinColumn({name:"category_id"})
    @ManyToOne(()=> Category)
    category: Category;

    @Column()
    status: string;

    @CreateDateColumn()
    created_at:Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}

export {Request}