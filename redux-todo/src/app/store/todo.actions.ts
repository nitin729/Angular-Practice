import { createAction, props } from '@ngrx/store';

export const addTodo = createAction('Add Todo', props<{ content: string }>());

export const removeTodo = createAction('Remove Todo', props<{ id: string }>());
