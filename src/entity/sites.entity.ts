import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"

@Entity("sites")
export class Sites {
  @PrimaryGeneratedColumn({ name: "id" })
  id!: number;

  @Column({ name: "title" })
  title!: string;

  @Column({ name: "user_id" })
  userId!: number;
}

