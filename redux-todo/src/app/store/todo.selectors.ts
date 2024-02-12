import { createSelector } from '@ngrx/store';
import { AppState } from './state';
import { TodoState } from './todo.reducer';

export const selectTodos = (state: AppState) => state.todos;

export const selectAllTodos = createSelector(
  selectTodos,
  (state) => state?.todos
);
