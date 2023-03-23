import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '../entities/user.entity';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { SearchMap } from '../common/search-map.dto';
import { BaseService } from '../common/base.service';

@Injectable()
export class UserService extends BaseService<User> {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<User>,
  ) {
    super();
  }

  create(createUserDto: CreateUserDto) {
    return this.userRepository.create(createUserDto);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: string) {
    return this.userRepository.findOneBy({ id });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userRepository.save(updateUserDto);
  }

  remove(id: string) {
    return this.userRepository.delete(id);
  }

  findByFields(searchMaps: SearchMap[]) {
    const builder = this.userRepository.createQueryBuilder('user');
    return this.searchByFields(searchMaps, builder);
  }
}
