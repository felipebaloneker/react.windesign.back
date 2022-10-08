import { Entity, PrimaryColumn, Column, CreateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("category")
class Category {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  details: string;

  @Column()
  price: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
export { Category };
