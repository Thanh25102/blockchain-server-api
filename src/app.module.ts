import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { databaseProvider } from './database/database.provider';
import { OrganizationModule } from './organization/organization.module';
import { RoleModule } from './role/role.module';

@Module({
  imports: [UserModule, DatabaseModule, OrganizationModule, RoleModule],
  controllers: [AppController],
  providers: [AppService, ...databaseProvider],
})
export class AppModule {}
