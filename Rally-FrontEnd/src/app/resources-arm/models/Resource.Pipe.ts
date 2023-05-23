// import { Pipe, PipeTransform } from '@angular/core'
// import { Resource } from '../models/Search'
// import { Category } from '../models/Search';

// @Pipe({ name: 'resource' })
// export class ResourcePipe implements PipeTransform {
//   transform(values: Resource[], filter: string): Resource[] {
//     if (!filter || filter.length === 0) {
//       return values;
//     }

//     if (values.length === 0) {
//         return values;
//       }
  
//       return values.filter((value: (Resource)) => {
//           const descriptionFound =
//              value.resourceName.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
//            if (descriptionFound) {
//              return value;
//            }
//          });
//   }
// }