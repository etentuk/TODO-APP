import { makeAutoObservable } from 'mobx';
import { Todo, TodoStoreTypes } from './store.types';

const defaultTodo = () => ({
  name: '',
  id: Math.random() * 1000,
  details: '',
  date: new Date(),
  completed: false,
});

const defaultTodos = {
  100000: {
    name: 'Test',
    id: 100000,
    details: 'Mic Check',
    date: new Date(),
    completed: false,
  },
  100001: {
    name: 'Test1',
    id: 100001,
    details: 'Mic Check',
    date: new Date(),
    completed: false,
  },
  100002: {
    name: 'Test2',
    id: 100002,
    details: 'Mic Check',
    date: new Date(),
    completed: false,
  },
};

export const TodoStore: TodoStoreTypes = makeAutoObservable({
  todo: defaultTodo(),
  todos: defaultTodos,
  addTodo: (todo: Todo) => {
    TodoStore.todos[todo.id] = todo;
    TodoStore.todo = defaultTodo();
  },
  setTodo: (todo: Todo) => {
    TodoStore.todo = todo;
  },
  setTodoWithID: (id: number) => {
    TodoStore.todo = TodoStore.todos[id];
  },
  completeTodo: (id: number) => {
    TodoStore.todos[id].completed = true;
  },
  completedTodos: () => {
    return Object.values(TodoStore.todos).filter(todo => todo.completed);
  },
  incompleteTodos: () => {
    return Object.values(TodoStore.todos).filter(todo => !todo.completed);
  },
  resetTodo: () => {
    TodoStore.todo = defaultTodo();
  },
});
