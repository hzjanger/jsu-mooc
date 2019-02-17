import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {httpOptions} from "../../entity/const/myConst";
import {Observable} from "rxjs/internal/Observable";


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  selectUserTaskLists(user_id: string): Observable<any> {
    const url = `/mooc/taskList/userTaskList`;
    return this.http.post<any>(url,{'user_id': user_id} ,httpOptions);
  }
}
