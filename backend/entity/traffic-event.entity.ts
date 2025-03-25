import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { VehicleType } from '../types';

@Entity()
export class TrafficEvent {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  country!: string;

  @Column({ type: 'timestamp' })
  timestamp!: Date;

  @Column({ type: 'enum', enum: VehicleType, name: 'vehicle_type' })
  vehicleType!: VehicleType;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;
}
