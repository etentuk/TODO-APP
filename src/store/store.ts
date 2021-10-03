import { makeAutoObservable } from 'mobx';
import { Todo, TodoStoreTypes } from './store.types';

const newTodo = {
  name: '',
  id: 0,
  details: '',
  date: new Date(),
  completed: false,
};

export const TodoStore: TodoStoreTypes = makeAutoObservable({
  todo: newTodo,
  todos: {},
  addTodo: (todo: Todo) => {
    TodoStore.todos[todo.id] = todo;
    TodoStore.todo = newTodo;
  },
  setTodo: (todo: Todo) => {
    todo.id = new Date().getTime();
    TodoStore.todo = todo;
  },
  completedTodos: () => {
    return Object.values(TodoStore.todos).filter(todo => todo.completed).length;
  },
  incompleteTodos: () => {
    return Object.values(TodoStore.todos).filter(todo => !todo.completed)
      .length;
  },
});
