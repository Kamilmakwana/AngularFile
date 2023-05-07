import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Todo } from "src/app/Todo";

@Component({
  selector: 'app-angular-item',
  templateUrl: './angular-item.component.html',
  styleUrls: ['./angular-item.component.css']
})
export class AngularItemComponent {
  @Input()
  todo: Todo = new Todo;
  @Output() todoDelete: EventEmitter<Todo> =  new EventEmitter;

  constructor(){}
  onClick(todo : Todo){
    this.todoDelete.emit(todo)
  }
}