export type TodoStoreTypes = {
  todo: Todo;
  todos: Record<number, Todo>;
  addTodo: (todo: Todo) => void;
  setTodo: (todo: Todo) => void;
  completedTodos: () => Todo[];
  completeTodo: (id: number) => void;
  incompleteTodos: () => Todo[];
};

export type Todo = {
  name: string;
  details: string;
  date: Date;
  id: number;
  completed: boolean;
};
