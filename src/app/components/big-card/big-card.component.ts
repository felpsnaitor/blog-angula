import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [RouterModule],
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

  @Input()
  id:string = "0"
}
