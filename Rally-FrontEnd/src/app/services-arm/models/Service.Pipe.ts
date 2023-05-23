import { Pipe, PipeTransform } from '@angular/core';
import { Service } from '../models/Search';

@Pipe({ name: 'service' })
export class ServicePipe implements PipeTransform {
  transform(values: Service[], filter: string): Service[] {
    if (!filter || filter.length === 0) {
      return values;
    }

    if (values.length === 0) {
      return values;
    }

    return values.filter((value: (Service)) => {
      const descriptionFound =
        value.service.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
        const typeFound =
        value.type["type"].toLowerCase().indexOf(filter.toLowerCase()) !== -1;
      if (descriptionFound || typeFound) {
        return value;
      }
    });
  }
}