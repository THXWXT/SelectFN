import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  FullName: string;

  @Column()
  from: string;

  @Column()
  to: string;

  @Column('date', { nullable: true })
  departure: Date;

  @Column('date', { nullable: true })
  arrival: Date;

  @Column()
  Adults: number;

  @Column()
  children: number;

  @Column()
  infants: number;

  
}
