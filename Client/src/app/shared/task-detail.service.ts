import { TaskDetail } from './task-detail.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TaskDetailService {
  formData: TaskDetail;
  readonly rootURL = 'http://localhost:3000';
  list : TaskDetail[];
  tempList: TaskDetail[];

  constructor(private http: HttpClient) { }

  postTask() {
    return this.http.post(this.rootURL + '/Task', this.formData);
  }
  putTask() {
    return this.http.put(this.rootURL + '/Task/'+ this.formData.TaskId, this.formData);
  }
  deleteTask(id:any) {
    return this.http.delete(this.rootURL + '/Task/'+ id);
  }

  refreshList(){
    this.http.get(this.rootURL + '/Task')
    .toPromise()
    .then(res => {
      this.list = res as TaskDetail[]; 
      this.tempList = res as TaskDetail[];
    })
  }

}
