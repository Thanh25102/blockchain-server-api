import { Inject, Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Role } from '../entities/role.entity';
import { Organization } from '../entities/organization.entity';

@Injectable()
export class OrganizationMock {
  constructor(
    @Inject('ORGANIZATION_REPO')
    private readonly organizationRepo: Repository<Organization>,
  ) {}

  createMockData(num: number) {
    const organizations: Organization[] = [];
    for (let i = 0; i < num; i++) {
      organizations.push({
        id: faker.datatype.uuid(),
        deletedAt: '',
        updatedAt: '',
        createdAt: faker.datatype.datetime().toDateString(),
        docType: 'Organization',
        name: faker.company.name(),
        path: '',
        parentId: '',
        totalUser: faker.random.numeric(),
      });
    }
    return this.organizationRepo
      .createQueryBuilder('org')
      .insert()
      .values(organizations)
      .execute();
  }
}
