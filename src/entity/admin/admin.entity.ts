import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column({ length: 45 })
  username: string;

  @Column({ length: 255 })
  password: string;

  @Column({ length: 255 })
  mobile: string;

  @Column({ length: 255 })
  email: string;

  @Column({ default: () => 1 })
  status: number;

  @Column()
  is_super: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  add_time: Date;
}
