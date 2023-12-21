import { Component } from '@angular/core';
import {MenuTitleComponent} from '../../components/menu-title/menu-title.component'
import {BigCardComponent} from '../../components/big-card/big-card.component'
import {SmallCardComponent} from '../../components/small-card/small-card.component'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuTitleComponent, BigCardComponent, SmallCardComponent,RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.responsive.component.css']
})
export class HomeComponent {

}
