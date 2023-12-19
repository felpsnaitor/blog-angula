import { Component } from '@angular/core';
import {MenuTitleComponent} from '../../components/menu-title/menu-title.component'
import {BigCardComponent} from '../../components/big-card/big-card.component'
import {MenuNavComponent} from '../../components/menu-nav/menu-nav.component'
import {SmallCardComponent} from '../../components/small-card/small-card.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuTitleComponent, BigCardComponent, MenuNavComponent, SmallCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.responsive.component.css']
})
export class HomeComponent {

}
