import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Employee {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    department: string

    @Column()
    position: string

}
