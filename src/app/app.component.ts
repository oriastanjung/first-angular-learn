import { Component } from '@angular/core';
import { Heroes } from './heroes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'aplicaitons';
  houseList: Heroes[] = [
    {
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo: '../assets/housing-1.jpg',
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      name: 'A113 Transitional Housing',
      city: 'Santa Monica',
      state: 'CA',
      photo: '../assets/housing-2.jpg',
      availableUnits: 0,
      wifi: false,
      laundry: true,
    },
    {
      name: 'Warm Beds Housing Support',
      city: 'Juneau',
      state: 'AK',
      photo: '../assets/housing-3.jpg',
      availableUnits: 1,
      wifi: false,
      laundry: false,
    },
  ];

  selectedHouse : Heroes | undefined
  updateSelectedHouse(house : Heroes){
    this.selectedHouse = house
  }

  backHandle(){
    this.selectedHouse = undefined
  }
}
