import { eventWrapper } from '@testing-library/user-event/dist/utils'
import React, { useState  } from 'react'
import { useNavigate } from 'react-router-dom'
import { json } from 'react-router-dom'
import axios, { Axios } from 'axios'

export const CreateTaskPage = () => {

  const [Title, setTitle] = useState('')
  const [Task, setTask] = useState('')

  const handleChangeTitle = (event) => {
    setTitle(event.target.value)
    console.log(Title)
  }

  const handleChangetask = (event) => {
    setTask(event.target.value)
    console.log(Task)
  }

  const handleApi = async () => {
    axios.post("http://127.0.0.1:8000/api/task-create/" , {
      title : JSON.stringify(Title),
      task : JSON.stringify(Task)
    }).then(function (response) {
      console.log(response)
    })
  };

  const navigate = useNavigate();
  const routeChange = () => {
    const path = `/`;
    navigate(path);
  };
  


  return (
    <>
      <div >
        <button onClick={routeChange} className="btn btn-primary mt-4  hover:bg-orange-700 border-b-indigo-600 ">
          Task Page
        </button>

        <div className=" mx-auto mt-40 artboard rounded-lg artboard-horizontal phone-3 bg-primary">
          <div className="flex flex-col w-full">
            <div className="grid h-20 card bg-primary rounded-box place-items-left">
              <div className="flex items-end ">
                <input
                  onChange={handleChangeTitle}
                  type="text"
                  placeholder="your task name"
                  className=" mt-4 ml-5 input input-bordered w-full max-w-xs bg-inherit border-bg-inherit"
                />
                <button
                  onClick={handleApi}
                  className=" btn btn-primary hover:bg-red-700 w-20  ml-80 mr-7"
                >
                  ADD{" "}
                </button>
              </div>
            </div>
            <div className="divider"></div>
            <div className="grid h-20 card bg-primary rounded-box place-items-center">
              <textarea
                onChange={handleChangetask}
                placeholder="Bio"
                className=" bg-inherit mr-96 textarea textarea-lg mx-auto max-w-lg w-full  "
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
