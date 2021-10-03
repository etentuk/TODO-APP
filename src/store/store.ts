import {makeAutoObservable} from 'mobx';

interface TodoStoreTypes {
  todos: any[];
  name: string;
  setName: (name: string) => void;
  addTodo: (todo: any) => void;
}

export const TodoStore: TodoStoreTypes = makeAutoObservable({
  todos: [],
  name: '',
  setName: name => {
    TodoStore.name = name;
  },
  addTodo: (todo: any) => {
    TodoStore.todos.push(todo);
  },
});
