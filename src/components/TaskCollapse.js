import React from 'react'

export const TaskCollapse = ({task}) => {

  const getTitle = (task) => {
     const title = task.title
    return title
  }

  const getStatus = (task) => {
    if (task.completed === false) {
      return false
    } else {
      return true
    }
  }

  const getTask = (task) => {
    return task.task
  }

  



  return (
    <>
      <div className="collapse bg-base-200 max-w-lg mx-auto mb-2 ">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          <h2 className=" text-left ml-4 mt-2">{getTitle(task)}</h2>
        </div>
        <div className="collapse-content bg-primary">
          <div>
            <p className="text-left">{getTask(task)}</p>
          </div>
        </div>
      </div>
    </>
  );
}
