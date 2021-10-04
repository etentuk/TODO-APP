export type TodoStoreTypes = {
  todo: Todo;
  todos: Record<number, Todo>;
  addTodo: (todo: Todo) => void;
  setTodo: (todo: Todo) => void;
  setTodoWithID: (id: number) => void;
  completedTodos: () => Todo[];
  toggleCompleteTodo: (id: number) => void;
  incompleteTodos: () => Todo[];
  resetTodo: () => void;
};

export type Todo = {
  name: string;
  details: string;
  date: Date;
  id: number;
  completed: boolean;
};
