import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"

@Entity("alarm_zones")
export class AlarmZones {
  @PrimaryGeneratedColumn({ name: "id" })
  id!: number;

  @Column({ name: "armed" })
  armed!: boolean ;

  @Column({ name: "name" })
  name!: string;

  @Column({ name: "site_id" })
  siteId!: number
}

