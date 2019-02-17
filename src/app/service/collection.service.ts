import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Collection} from '../entity/collection';

@Injectable({
  providedIn: 'root'
})

/**
 * 收藏课程的服务
 */
export class CollectionService {

  constructor(private http: HttpClient) { }

  /**
   * 得到用户收藏的所用课程
   * @param usernickname
   */
  getAllCollections(usernickname: string, page: number): Observable<Collection> {
    const url = `/olcp/user/collection/allcollections?usernickname=${usernickname}&page=${page}`;
    return this.http.get<Collection>(url);
  }

  /**
   * 用户添加收藏课程
   * @param collection
   */
  addCollection(collection: Collection) {
    const url = `/olcp/user/collection/add`;
    return this.http.post(url, collection);

  }

  isCollection(userid: number, coursetailnum: string) {
    const url = `/olcp/course/judgecollection?userid=${userid}&coursetailnum=${coursetailnum}`;
    return this.http.get(url);
  }
}
