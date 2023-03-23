import { Inject, Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Role } from '../entities/role.entity';

@Injectable()
export class RoleMock {
  constructor(
    @Inject('ROLE_REPO') private readonly roleRepo: Repository<Role>,
  ) {}

  createMockData(num: number) {
    const roles: Role[] = [];
    for (let i = 0; i < num; i++) {
      roles.push({
        id: faker.datatype.uuid(),
        deletedAt: '',
        updatedAt: '',
        createdAt: faker.datatype.datetime().toDateString(),
        docType: 'Role',
        name: faker.company.name(),
        type: faker.company.companySuffix(),
      });
    }
    return this.roleRepo
      .createQueryBuilder('role')
      .insert()
      .values(roles)
      .execute();
  }
}
