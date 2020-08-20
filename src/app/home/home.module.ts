import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeListComponent } from './home-list/home-list.component';
import { TaskToolbarComponent } from './components/task-toolbar/task-toolbar.component';


@NgModule({
  declarations: [
	HomeListComponent,
	TaskToolbarComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
