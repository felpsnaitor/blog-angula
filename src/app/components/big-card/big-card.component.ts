import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css','./big-card.responsive.component.css']
})
export class BigCardComponent {
  @Input()
  imgBigCard:string = ""

  @Input()
  titleBigCard:string = ""

  @Input()
  descriptionBigCard:string = ""

  @Input()
  dataBigCard:string = ""
}
