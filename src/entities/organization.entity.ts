import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Organization {
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
  name: string;

  @Column()
  parentId: string;

  @Column()
  path: string;

  @Column()
  totalUser: string;

  @ManyToMany(() => User, (user) => user.organizations, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  users?: User[];
}
