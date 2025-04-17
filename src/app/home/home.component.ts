import { Component, inject } from '@angular/core';
import { HousingService } from '../housing.service';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { NgFor, SlicePipe } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { SortByNamePipe } from '../pipes/sort-by-name.pipe';

@Component({
  selector: 'app-home',
  imports: [NgFor, HousingLocationComponent, SlicePipe, SortByNamePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  filteredLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }

  filterResult(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
    }

    this.filteredLocationList = this.housingLocationList.filter((location) => {
      return location?.city.toLowerCase().includes(text.toLowerCase());
    });
  }
}
