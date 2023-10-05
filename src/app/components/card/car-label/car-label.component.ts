import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-car-label',
  templateUrl: './car-label.component.html',
  styleUrls: ['./car-label.component.css']
})
export class CarLabelComponent {

  @Input()
  gameLabel:string = ''
}
