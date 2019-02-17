import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {mergeMap} from "rxjs/operators";
import {of} from "rxjs/internal/observable/of";
import {throwError} from "rxjs/internal/observable/throwError";

@Injectable()
export class FakeBackend implements HttpInterceptor{
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let testUser = {id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User'};
    return of(null)
      .pipe(mergeMap(() => {
        if (request.body.username === testUser.username && request.body.password === testUser.password) {
          let body = {
            id: testUser.id,
            username: testUser.username,
            firstName: testUser.firstName,
            lastName: testUser.lastName,
            token: 'fake-jwt-token'
          };
          return of(new HttpResponse({status: 200, body}));
        } else {
          return throwError({error: {message: 'Username or password is incorrect'}});
        }
      }))
  }
}
