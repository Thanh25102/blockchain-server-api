import { Inject, Injectable } from '@nestjs/common';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { Repository } from 'typeorm';
import { Organization } from '../entities/organization.entity';
import { SearchMap } from '../common/search-map.dto';
import { BaseService } from '../common/base.service';

@Injectable()
export class OrganizationService extends BaseService<Organization> {
  constructor(
    @Inject('ORGANIZATION_REPO')
    private readonly organizationRepo: Repository<Organization>,
  ) {
    super();
  }

  create(createOrganizationDto: CreateOrganizationDto) {
    return this.organizationRepo.create(createOrganizationDto);
  }

  findAll() {
    return this.organizationRepo.find();
  }

  findOne(id: string) {
    return this.organizationRepo.findOneBy({ id });
  }

  update(id: string, updateOrganizationDto: UpdateOrganizationDto) {
    return this.organizationRepo.update(id, updateOrganizationDto);
  }

  remove(id: string) {
    return this.organizationRepo.delete(id);
  }

  findByFields(searchMaps: SearchMap[]) {
    const builder = this.organizationRepo.createQueryBuilder('org');
    return this.searchByFields(searchMaps, builder);
  }
}
