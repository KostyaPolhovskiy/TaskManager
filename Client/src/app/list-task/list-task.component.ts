import { TaskDetailService } from './../shared/task-detail.service';
import { Component, OnInit } from '@angular/core';
import { TaskDetail } from '../shared/task-detail.model';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css'], 
  styles: []
})
export class ListTaskComponent implements OnInit {

  constructor(private service: TaskDetailService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  parseDate(stringDate:any) {
    let date: Date;
    date = new Date(stringDate);
    return ('0' + date.getDate()).slice(-2) + '.' + ('0' + (date.getMonth() + 1)).slice(-2) + '.' + date.getFullYear();
  }

  notDefaultDate(stringDate:any) {
    return stringDate != '';
  }

  notDefaultFiles(stringFiles:any) {
    return stringFiles != '';
  }

  deleteTask(taskId:number) {
      this.service.deleteTask(taskId).subscribe(
        res => {
          debugger;
          setTimeout( () => { this.service.refreshList(); }, 800); //delay for animation delete
        },
        err => {
          debugger;
          console.log(err);
        }) 
  }

  editTask(task:TaskDetail, event:any) {
    //check event (can be delete event click by emersion)
    let pId = event.target.parentElement.id;
    if (pId != "buttonDeleteTask") {
      this.service.formData = Object.assign({}, task);
    }
  }

}
