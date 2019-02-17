import { Injectable } from '@angular/core';
import {Subject} from "rxjs/internal/Subject";

@Injectable({
  providedIn: 'root'
})
export class EventBusService {

  constructor() { }

  public eventBus: Subject<string> = new Subject<string>();

}
