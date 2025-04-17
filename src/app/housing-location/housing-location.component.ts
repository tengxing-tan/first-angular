import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housinglocation';
import { RouterLink } from '@angular/router';
import { CustomIfDirective } from '../directives/appCustomIf.directive';

@Component({
  selector: 'app-housing-location',
  imports: [RouterLink, CustomIfDirective],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
