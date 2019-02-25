import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"

@Entity("users")
export class Users {
  @PrimaryGeneratedColumn({ name: "id" })
  id!: number;

  @Column({ name: "username" })
  username!: string;

  @Column({ name: "password" })
  password!: string
}

