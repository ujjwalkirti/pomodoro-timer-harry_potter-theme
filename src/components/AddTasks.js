import React from "react";
import { ImMagicWand } from "react-icons/im";
import { GiMagicBroom } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IoMdRemoveCircle } from "react-icons/io";
import { MdRemoveDone } from "react-icons/md";
import { useState } from "react";

function AddTasks() {
  const [wantsToAddTask, setWantsToAddTask] = useState(false);
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <div className="flex flex-col font-semibold text-lg">
      <p className="text-center">
        #1
        <br />
        Time to focus
      </p>
      <div className="flex items-center justify-between mx-4 border-b-2 py-1 border-white border-opacity-60">
        <p className="text-3xl">Tasks</p>
        <button className="bg-white bg-opacity-40 p-2 rounded-lg">
          <ImMagicWand />
        </button>
      </div>
      {!wantsToAddTask && (
        <div
          className="mx-4 my-2 rounded-lg border-2 border-white border-opacity-60 border-dashed flex items-center justify-center p-4 cursor-pointer"
          onClick={() => {
            setWantsToAddTask(true);
          }}
        >
          <GiMagicBroom />
          <p className="ml-2 text-center">Add Task</p>
        </div>
      )}
      {wantsToAddTask && (
        <div className=" ">
          <form className="relative flex flex-col">
            <AiOutlineCloseCircle
              onClick={() => {
                setWantsToAddTask(false);
              }}
              className="absolute top-1 cursor-pointer right-10"
            />
            <input
              type="text"
              onChange={(event) => {
                setTask(event.target.value);
              }}
              placeholder="What's your task?"
              className="w-2/3 mx-auto mt-3 text-black px-2 py-1 rounded-xl"
            />
            <input
              type="submit"
              className="w-1/3 mx-auto cursor-pointer my-3 bg-black rounded-xl"
              placeholder="Create task"
              onClick={(event) => {
                event.preventDefault();
                setWantsToAddTask(false);
                let tasksArray = tasks;
                tasksArray.push(task);
                setTasks(tasksArray);
              }}
            />
          </form>
        </div>
      )}
      <div className="flex flex-col px-3 ">
        {tasks.map((task) => {
          return (
            <div className="flex bg-white bg-opacity-30 m-2 p-2 rounded-lg shadow-lg">
              <p className="mr-2">{tasks.indexOf(task) + 1}.</p>
              <p>{task}</p>
              <IoMdRemoveCircle />
              <MdRemoveDone />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AddTasks;
