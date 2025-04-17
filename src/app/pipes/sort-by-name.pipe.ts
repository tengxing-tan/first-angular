import { Pipe, PipeTransform } from '@angular/core';
import { HousingLocation } from '../housinglocation';

@Pipe({
  name: 'sortByName'
})
export class SortByNamePipe implements PipeTransform {

  transform(housinglocations: HousingLocation[]): HousingLocation[] {
    return housinglocations.sort((a, b) => a.name.localeCompare(b.name));
  }

}
