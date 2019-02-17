import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudyPlanComponent} from './study-plan.component';
import {ProjectListComponent} from './project/project-list/project-list.component';
import {TaskHomeComponent} from './task/task-home/task-home.component';
import {AuthGuard} from "../../guards/auth.guard";

const routes: Routes = [
  {path: '', component: StudyPlanComponent, children: [
      {path: 'project', component: ProjectListComponent},
      {path: 'tasklist', component: TaskHomeComponent}
    ], canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudyPlanRoutingModule { }
