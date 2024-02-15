import { Component, Input } from '@angular/core';
import { Todo } from './model/todo';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  @Input() todos: Todo[];

  public toggleTask(todo: Todo): void {
    todo.done = !todo.done;
  }
}
