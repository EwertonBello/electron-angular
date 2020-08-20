import { Component } from '@angular/core';
import { ITask } from './shared/itask';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.scss']
})
  
export class HomeListComponent {

  public tasks: ITask[];
  public alert: boolean = false;
  readonly min_len: number = 5;

  constructor() { 
    this.tasks = [
      { name: 'Comprar Arroz', checked: false },
      { name: 'Levar o cachorro pra passear', checked: false },
    ];
  }

  addTask(taskInput: any): void {
    let taskName: string = taskInput.value.trim();
    if (taskName.length >= this.min_len) {
      let task:ITask = { name: taskName, checked: false }
      this.tasks.push(task);
      this.alert = false;
    }else {
      this.alert = true;
    }
    taskInput.value = "";
  }

  deleteTask(taskID: number): void {
    this.tasks = this.tasks.filter((obj, i) => i != taskID);
  }

  doneTask(taskID: number): void {
    this.tasks.map((task, i) => {
      if (i == taskID) {
        task.checked = !task.checked;
      }
    });
  }

}
