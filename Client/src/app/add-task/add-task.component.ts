import { TaskDetailService } from './../shared/task-detail.service';
import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['add-task.component.css'],
  styles: []
})
export class AddTaskComponent implements OnInit {

 
  constructor(private service: TaskDetailService) {
    this.service.formData = {
      Title: "",
      Deadline: "",
      CreatedDate: new Date(),
      Description: "",
      Files: "",
      Color: "red",
      TaskStatus: "In Planning",
      TaskId: 0
  }
   }

  ngOnInit() {
    this.resetForm;
  }

  resetForm(form?: NgForm) {
    
      form.form.reset();
      this.service.formData = {
        Title: "",
        Deadline: "",
        CreatedDate: new Date(),
        Description: "",
        Files: "",
        Color: "red",
        TaskStatus: "In Planning",
        TaskId: 0
    }
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.TaskId == 0) {
      this.insertRecord(form);
    }
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postTask().subscribe(
      res => {
        debugger;
        this.service.refreshList();
        this.resetForm(form);
      },
      err => {
        debugger;
        console.log(err);
      }
    )
  }
  updateRecord(form: NgForm) {
    this.service.putTask().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => {
        debugger;
        console.log(err);
      }
    )
  }
}

