import { Component } from '@angular/core';
import { Store, StoreModule, select } from '@ngrx/store';
import { selectAllTodos } from '../store/todo.selectors';
import { AppState } from '../store/state';
import { Todo, TodoState } from '../store/todo.reducer';
import { addTodo, removeTodo } from '../store/todo.actions';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent {
  public allTodos!: Observable<Todo[]>;
  constructor(private store: Store<AppState>) {
    this.allTodos = this.store.pipe(select(selectAllTodos));
  }
  public todoInput = '';

  public handleTodos() {
    this.store.dispatch(addTodo({ content: this.todoInput }));
  }
  public handleDelete(id: string) {
    this.store.dispatch(removeTodo({ id: id }));
  }
}
