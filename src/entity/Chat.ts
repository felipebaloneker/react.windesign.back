import {Entity, PrimaryColumn, Column, JoinColumn, ManyToOne} from 'typeorm';
import {v4 as uuid} from 'uuid';
import { Order } from './Order';

@Entity('Chat')
class Chat{
    @PrimaryColumn()
    readonly id: string;

    @Column()
    order:string;

    @JoinColumn({name:'order'})
    @ManyToOne(()=>Order)
    orderId : Order

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}
export {Chat}