import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo>= new EventEmitter();

  constructor(private todoService:TodoService) {}

  ngOnInit(): void {}

  // Set Dynamic Classes

  setClasses() {
    return {
      todo: true,
      'is-complete': this.todo.completed,
    };
  }

  onToggle(todo:Todo) {
    // Toggele in UI 
    todo.completed = !todo.completed;
    // Toggle on Server
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log("Toggele todo-->>", todo));
  }

  onDelete(todo) {
    this.deleteTodo.emit(todo)
  }

}
