import { Inject, Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Repository } from 'typeorm';
import { Role } from '../entities/role.entity';
import { BaseService } from '../common/base.service';
import { SearchMap } from '../common/search-map.dto';

@Injectable()
export class RoleService extends BaseService<Role> {
  constructor(
    @Inject('ROLE_REPO') private readonly roleRepo: Repository<Role>,
  ) {
    super();
  }

  create(createRoleDto: CreateRoleDto) {
    return this.roleRepo.create(createRoleDto);
  }

  findAll() {
    return this.roleRepo.find();
  }

  findOne(id: string) {
    return this.roleRepo.findOneBy({ id });
  }

  update(id: string, updateRoleDto: UpdateRoleDto) {
    return this.roleRepo.update(id, updateRoleDto);
  }

  remove(id: string) {
    return this.roleRepo.delete(id);
  }

  findByFields(searchMaps: SearchMap) {
    const builder = this.roleRepo.createQueryBuilder();
  }
}
