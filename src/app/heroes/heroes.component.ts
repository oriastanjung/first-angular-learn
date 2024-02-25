import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Heroes } from '../heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})
export class HeroesComponent {
  @Input() locationList: Heroes[] = [];
  results: Heroes[] = [];
  @Output() selectedHouseEvent = new EventEmitter<Heroes>();

  searchHouse(input: string) {
    let output : Heroes[]
    if (!input) {
      this.results = this.locationList
    };
    output = this.locationList.filter(
      (item) =>
        item.name.toLowerCase().includes(input.toLowerCase()) ||
        item.city.toLowerCase().includes(input.toLowerCase())
    );
    this.results = output;
  }

  selectHouse(house: Heroes) {
    this.selectedHouseEvent.emit(house);
  }
}
