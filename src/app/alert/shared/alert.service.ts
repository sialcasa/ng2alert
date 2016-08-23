import { Injectable } from '@angular/core';
import {Alert} from './alert';

@Injectable()
export class AlertService {

  private _alerts = []

  constructor() {
    console.log(this._alerts)
  }

  get alerts(){
    return this._alerts
  }

}
