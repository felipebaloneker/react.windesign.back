import { Column, Entity, PrimaryColumn, CreateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("users")
class User {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  type: string;

  @Column()
  phone: string;

  @Column()
  cpf: string;

  @Column()
  cnpj: string;

  @Column()
  juridico: string;

  @Column()
  birthday: string;

  @Column()
  address: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
export { User };
