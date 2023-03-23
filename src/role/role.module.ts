import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { DatabaseModule } from '../database/database.module';
import { roleProviders } from './role.providers';
import { RoleMock } from './role.mock';

@Module({
  controllers: [RoleController],
  imports: [DatabaseModule],
  providers: [RoleService, RoleMock, ...roleProviders],
})
export class RoleModule {}
