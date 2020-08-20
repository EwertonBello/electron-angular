import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-toolbar',
  templateUrl: './task-toolbar.component.html',
  styleUrls: ['./task-toolbar.component.scss']
})
export class TaskToolbarComponent {
  @Input() title: string;
  @Input() srcIcon: string = "assets/logo.svg";

}
