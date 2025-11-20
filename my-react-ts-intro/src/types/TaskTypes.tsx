export type TaskType = {
  id: number;
  title: string;
  done: boolean;
};

export type TaskListType = Array<TaskType>;

export type TaskStoreType = {
  tasks: TaskListType;
  storeTask: (title: string) => void;
  doneTask: (id: number) => void;
  deleteTask: (id: number) => void;
};