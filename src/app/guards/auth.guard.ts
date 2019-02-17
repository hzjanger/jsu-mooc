import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/internal/Observable";
import {Injectable} from "@angular/core";
import {HeaderComponent} from "../layout/header/header.component";
import {EventBusService} from "../service/message/event-bus.service";
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private eventBusService: EventBusService) {  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot,): Observable<boolean> | Promise<boolean> | boolean {

    if (localStorage.getItem('currentUser')) {
      return true;
    }

    this.eventBusService.eventBus.next('请登录');

    return false;
  }
}
