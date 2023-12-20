import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrls:['./small-card.component.css', './small-card.responsive.component.css']
})
export class SmallCardComponent {
  @Input()
  imgSmallCard:string = ""

  @Input()
  descriptionSmallCard:string = ""

  @Input()
  dataSmallCard:string = ""
}
