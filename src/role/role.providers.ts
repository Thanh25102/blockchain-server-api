import { DataSource } from 'typeorm';
import { Role } from '../entities/role.entity';

export const roleProviders = [
  {
    provide: 'ROLE_REPO',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Role),
    inject: ['DATA_SOURCE'],
  },
];
