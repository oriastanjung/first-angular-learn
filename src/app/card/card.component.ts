import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() name : string = ''
  @Input() photo : string = ''
  @Input() city : string = ''
  @Input() state : string = ''
  @Input() wifi : boolean = false
  @Input() laundry : boolean = false
  @Input() availableUnits : number = 0
  @Output() onClick = new EventEmitter<void>()

  handleClick(){
    this.onClick.emit()
  }
}