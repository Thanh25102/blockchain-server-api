import { Inject, Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

export class UserMock {
  constructor(
    @Inject('USER_REPOSITORY') private readonly userRepo: Repository<User>,
  ) {}

  createMockData(num: number) {
    const users: User[] = [];
    for (let i = 0; i < num; i++) {
      const code = `CB${uuidv4()}`;
      users.push({
        id: faker.datatype.uuid(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        deletedAt: '',
        updatedAt: '',
        phone: faker.phone.number(),
        createdAt: faker.datatype.datetime().toDateString(),
        docType: 'User',
        code: code,
        email: faker.internet.email(),
        jobPositionName: faker.name.jobTitle(),
        username: faker.internet.userName(),
        password: faker.internet.password(),
        workUnitId: faker.datatype.uuid(),
      });
    }
    return this.userRepo
      .createQueryBuilder('user')
      .insert()
      .values(users)
      .execute();
  }
}
