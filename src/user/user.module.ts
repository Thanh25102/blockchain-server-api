import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { userProviders } from './user.providers';
import { DatabaseModule } from '../database/database.module';
import { UserMock } from './user.mock';

@Module({
  controllers: [UserController],
  imports: [DatabaseModule],
  providers: [UserService, UserMock, ...userProviders],
})
export class UserModule {}
