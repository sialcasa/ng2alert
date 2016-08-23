import {RouterConfig, provideRouter, ROUTER_DIRECTIVES} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AlertComponent} from './alert/alert.component';
/**
 * Created by sialcasa on 23.08.16.
 */


let appRoutings : RouterConfig = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'alert',
    component:AlertComponent
  }
]

export let routerProviders = provideRouter(appRoutings)
