import { Component } from '@angular/core';
import { Todo } from "../../Todo";

@Component({
  selector: 'app-angular-new',
  templateUrl: './angular-new.component.html',
  styleUrls: ['./angular-new.component.css']
})
export class AngularNewComponent {
  todos:Todo[];
  constructor(){
    this.todos = [
      {
        SRNo:1,
        Title:"Test",
        Desc:"ME",
        Active:true
      },
      {
        SRNo:2,
        Title:"Test2",
        Desc:"ME2",
        Active:false
      },
      {
        SRNo:3,
        Title:"Test3",
        Desc:"ME3",
        Active:true
      }
    ]
  }
  deleteTodo(todo : Todo){
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    alert('Are You Sure TO Want To Delete'+todo.Title)
  }
}
