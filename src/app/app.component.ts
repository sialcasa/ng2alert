import { Component } from '@angular/core';
import {HomeComponent} from './home/home.component';
import {AlertComponent} from './alert/alert.component';
import {ROUTER_DIRECTIVES} from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives : [HomeComponent, AlertComponent,ROUTER_DIRECTIVES]
})
export class AppComponent {
  title = 'app works!';
}
