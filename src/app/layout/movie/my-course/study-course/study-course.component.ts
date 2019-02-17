import { Component, OnInit } from '@angular/core';
import {RecordService} from '../../../../service/record.service';
import {MyRecord} from '../../../../entity/record';
import {CollectionService} from '../../../../service/collection.service';
import {Collection} from '../../../../entity/collection';

@Component({
  selector: 'app-study-course',
  templateUrl: './study-course.component.html',
  styleUrls: ['./study-course.component.scss']
})
export class StudyCourseComponent implements OnInit {

  page: number = 0;
  course_list: MyRecord[];
  collection: Collection[];
  constructor(private recordService: RecordService,
              private collectionService: CollectionService) { }

  ngOnInit() {
    this.recordService.getAllRecords('LJQ', this.page)
      .subscribe((data: any) => {
        console.log(data);
        this.course_list = data.content;
        console.log(this.course_list);
      });
    this.collectionService.getAllCollections('LJQ', this.page)
      .subscribe((data: any) => {
        this.collection = data.content;
        console.log(this.collection);
      });
  }

}
