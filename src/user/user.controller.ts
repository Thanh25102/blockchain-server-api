import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SearchMap } from '../common/search-map.dto';
import { UserMock } from './user.mock';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly userMock: UserMock,
  ) {}

  @Post(':num')
  createMockData(@Param('num') num: string) {
    return this.userMock.createMockData(10);
  }

  @Get()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('')
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Get('search')
  findByField(@Query('id') id: string) {
    return this.userService.findByFields([new SearchMap(id, 'id')]);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
