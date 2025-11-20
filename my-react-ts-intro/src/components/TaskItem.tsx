import type { FC } from "react";
import type { TaskType } from "../types/TaskTypes";
import { Trash2 } from "lucide-react";
import Button from "./Button";
import useTaskStore from "../stores/useTaskStore";

type TaskItemType = {
  task: TaskType;
};

const TaskItem: FC<TaskItemType> = ({ task: { id, title, done } }) => {
  const { doneTask, deleteTask } = useTaskStore();

  const handleDone = () => {
    doneTask(id);
  };

  const handleDelete = () => {
    deleteTask(id);
  };

  return (
    <div className="border-2 border-stone-600 p-5 flex items-center gap-3">
      <input onChange={handleDone} type="checkbox" checked={done} />
      <p className=" text-stone-500">{title}</p>
      <Button onClick={handleDelete} variant="plain" className=" ms-auto">
        <Trash2 className=" size-4" />
      </Button>
    </div>
  );
};

export default TaskItem;
