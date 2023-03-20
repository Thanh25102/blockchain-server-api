import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Organization } from './organization.entity';
import { Role } from './role.entity';

@Entity()
export class User {
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
  code: string;
  @Column()
  firstName: string;
  @Column()
  jobPositionName: string;
  @Column()
  phone: string;
  @Column()
  lastName: string;
  @Column()
  email: string;
  @Column()
  username: string;
  @Column()
  password: string;
  @Column()
  workUnitId: string;

  @ManyToMany(() => Organization, (organization) => organization.users, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinTable({
    name: 'org_user',
    joinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'org_id',
      referencedColumnName: 'id',
    },
  })
  organizations?: Organization[];

  @ManyToMany(() => Role, (role) => role.users, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinTable({
    name: 'user_role',
    joinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'role_id',
      referencedColumnName: 'id',
    },
  })
  roles?: Role[];
}
