import { DataSource } from 'typeorm';
import { Organization } from '../entities/organization.entity';

export const organizationProviders = [
  {
    provide: 'ORGANIZATION_REPO',
    useFactory: (datasource: DataSource) =>
      datasource.getRepository(Organization),
    inject: ['DATA_SOURCE'],
  },
];
