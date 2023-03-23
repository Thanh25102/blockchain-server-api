import { SearchMap } from './search-map.dto';
import { SelectQueryBuilder } from 'typeorm';

export abstract class BaseService<T> {
  protected searchByFields(
    searchMaps: SearchMap[],
    builder: SelectQueryBuilder<T>,
  ) {
    searchMaps.forEach((search) => {
      if (typeof search.field === 'string') {
        builder.where(`${search.field} like :value`, { value: search.value });
      } else {
        builder.where(`${search.field} = :value`, { value: search.value });
      }
    });
    return builder.getMany();
  }
}
