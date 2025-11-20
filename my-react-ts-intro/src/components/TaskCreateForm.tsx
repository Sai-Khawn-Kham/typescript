import { Plus } from "lucide-react";
import Button from "./Button";
import { useState, type ChangeEvent, type KeyboardEvent } from "react";
import useTaskStore from "../stores/useTaskStore";

const TaskCreateForm = () => {
  const [text, setText] = useState<string>("");
  const { storeTask } = useTaskStore();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      storeTask(e.currentTarget.value);
      setText("");
    }
  };

  const handleClick = () => {
    storeTask(text);
    setText("");
  };

  return (
    <div className=" border-2 border-stone-600 p-5 flex gap-5 mb-5">
      <input
        className=" text-stone-500 focus:outline-0 w-full"
        placeholder="Write your new task"
        value={text}
        onChange={handleChange}
        onKeyUp={handleEnter}
      />
      <Button variant="solid" onClick={handleClick}>
        <Plus />
      </Button>
    </div>
  );
};

export default TaskCreateForm;
