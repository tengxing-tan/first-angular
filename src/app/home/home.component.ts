import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { HousingService } from '../housing.service';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule, NgFor, NgIf, SlicePipe } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { SortByNamePipe } from '../pipes/sort-by-name.pipe';

@Component({
  selector: 'app-home',
  imports: [NgFor, NgIf, CommonModule, HousingLocationComponent, SlicePipe, SortByNamePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  maxItemsToShow = 1;
  housingLocationList: HousingLocation[] = [];
  filteredLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  textPromise: Promise<any> | null = null;

  constructor(private ref: ChangeDetectorRef) {
    this.getSamplePromise();
    this.showHousingLocationEvery3secs();
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }

  async getSamplePromise() {
    this.textPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Done 👍');
      }, 3000);
    });
  }

  showHousingLocationEvery3secs() {
    const intervalId = setInterval(() => {
      if (this.maxItemsToShow >= 10) {
        clearInterval(intervalId);
        return;
      }
      this.maxItemsToShow++;
      this.ref.detectChanges();
    }, 300);
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
