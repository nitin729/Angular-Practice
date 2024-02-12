import { createReducer, on } from '@ngrx/store';
import { addTodo, removeTodo } from './todo.actions';

export interface Todo {
  content: string;
  id: string;
}

export interface TodoState {
  todos: Todo[];
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: TodoState = {
  todos: [],
  error: '',
  status: 'pending',
};

export const todoReducers = createReducer(
  //supply the initial state
  initialState,
  //Add the reducers according to the actions
  on(addTodo, (state, action) => {
    console.log(action);
    return {
      ...state,
      todos: [
        ...state.todos,
        {
          id: Date.now().toString(),
          content: action.content,
        },
      ],
    };
  }),
  on(removeTodo, (state, action) => {
    return {
      ...state,
      todos: state.todos.filter((todo) => todo.id !== action.id),
    };
  })
);
