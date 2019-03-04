import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"

@Entity("storage_types")
export class StorageTypes {
  @PrimaryGeneratedColumn({ name: "id" })
  id!: number;

  @Column({ name: "type" })
  type!: string

}

