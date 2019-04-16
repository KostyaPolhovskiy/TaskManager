import { Component } from '@angular/core';
import { TaskDetailService } from '../shared/task-detail.service';
import { TaskDetail } from '../shared/task-detail.model';

@Component({
  selector: 'app-filter-task',
  templateUrl: './filter-task.component.html',
  styleUrls: ['./filter-task.component.css']
})
export class FilterTaskComponent{

  constructor(private service: TaskDetailService) {}

  filterTask(filterBy:string) {
    if (filterBy != '') 
      this.service.list = this.service.tempList.filter(task => task.TaskStatus == filterBy);
    else 
      this.service.list = this.service.tempList;
  }
}
