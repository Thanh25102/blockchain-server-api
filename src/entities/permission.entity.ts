import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { Role } from './role.entity';

@Entity()
export class Permission {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  docType: string;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;

  @Column()
  deletedAt: string;

  @Column()
  type: string;

  @Column()
  name: string;

  @Column()
  code: string;

  @ManyToMany(() => Role, (role) => role.permissions, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  roles?: Role[];
}
