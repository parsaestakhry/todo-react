import React, { useEffect, useState } from "react";
import { ReactComponent as AddIcon } from "../assets/add.svg";
import { TaskCollapse } from "../components/TaskCollapse";
import { CreateTaskPage } from "./CreateTaskPage";
import { Link, useNavigate } from "react-router-dom";

export const TaskListPage = () => {
  const [Tasks, setTasks] = useState([]);
  const getTask = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/task-list/");
    const data = await response.json();
    setTasks(data);
    console.log(data);
  };

  useEffect(() => {
    getTask();
  }, []);

  const navigate = useNavigate();
  const routeChange = () => {
    const path = `create/`
    navigate(path)
  }

  return (
    <>
      
      <h1 className="text-5xl  mt-16 font-medium text-center mb-20">
        My task list
      </h1>
      <div className="flex justify-center items-center h-full">
        <div className="form-control">
          <button
            onClick={routeChange}
            className="btn btn-square bg-primary -mb-20 -mt-4  rounded-md hover:bg-zinc-400"
          >
            <AddIcon />
          </button>
        </div>
      </div>
      <div className=" mt-24 rounded-lg text-center mx-auto ">
        {Tasks.map((task, index) => (
          <TaskCollapse key={index} task={task} />
        ))}
      </div>
    </>
  );
};
