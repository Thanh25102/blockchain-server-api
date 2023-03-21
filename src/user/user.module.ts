import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { userProviders } from './user.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  controllers: [UserController],
  imports: [DatabaseModule],
  providers: [UserService, ...userProviders],
})
export class UserModule {}
