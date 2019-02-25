import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany, JoinTable, OneToOne} from "typeorm"
import {Storage} from "./storages.entity";

@Entity("devices")
export class Devices {
 @PrimaryGeneratedColumn({ name: "id" })
 id!: number;

 @Column({ name: "site_id" })
 siteId!: string;

 @Column({ name: "alarm_zone_id" })
 alarmZoneId!: number;

 @Column({ name: "title" })
 title!: string;

 @Column({ name: "model" })
 model!: string;

 @Column({ name: "connected" })
 connected!: number;

 @OneToMany(type => Storage, storage =>  storage.device)
 storages!: Storage[];
}

