import { Module } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { OrganizationController } from './organization.controller';
import { organizationProviders } from './organization.providers';
import { DatabaseModule } from '../database/database.module';
import { OrganizationMock } from './organization.mock';

@Module({
  imports: [DatabaseModule],
  controllers: [OrganizationController],
  providers: [OrganizationService, OrganizationMock, ...organizationProviders],
})
export class OrganizationModule {}
