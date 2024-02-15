import { Component, OnInit } from '@angular/core';
import { Todo } from './model/todo';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public todos: Todo[] = [
    { label: 'Faire les coures', done: false },
    { label: 'Aller au sport', done: true },
    { label: 'Appeler mon frere', done: false },
  ];
  public toggleTask(todo: Todo): void {
    todo.done = !todo.done;
  }
  public task: string = '';
  public addTask(): void {
    if (this.task.trim() !== '') {
      this.todos.push({ label: this.task, done: false });
      this.task = '';
    }
  }
}
