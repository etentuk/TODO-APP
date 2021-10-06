export type TodoStoreTypes = {
  todo: Todo;
  todos: Record<string, Todo>;
  addTodo: (todo: Todo) => void;
  setTodo: (todo: Todo) => void;
  setTodoWithID: (id: string) => void;
  completedTodos: () => Todo[];
  toggleCompleteTodo: (id: string) => void;
  incompleteTodos: () => Todo[];
  resetTodo: () => void;
};

export type Todo = {
  name: string;
  details: string;
  date: Date;
  id: string;
  completed: boolean;
};
