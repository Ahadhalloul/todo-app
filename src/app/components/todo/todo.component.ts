import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos!: Todo[];
  task: string = '';
  constructor() {}

  ngOnInit(): void {
    this.todos = [
      { content: 'my first task', completed: true },
      { content: 'my second task', completed: false },
      { content: 'my third task', completed: false },
    ];
  }

  ondone(ind: number) {
    this.todos.map((el, i) => {
      if (i == ind) {
        el.completed = !el.completed;
      }
      return el;
    });
  }

  delete(ind: number) {
    this.todos = this.todos.filter((el, i) => {
      return i != ind;
    });
  }
  onsubmit() {
    this.todos.push({ content: this.task, completed: false });
    this.task = '';
  }
}
