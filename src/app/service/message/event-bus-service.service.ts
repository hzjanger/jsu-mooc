import { Injectable } from '@angular/core';
import {Subject} from "rxjs/internal/Subject";

@Injectable({
  providedIn: 'root'
})
export class EventBusServiceService {

  constructor() { }

  public eventBus: Subject<string> = new Subject<string>();

}
