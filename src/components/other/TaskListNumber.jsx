import React from "react";

const TaskListNumber = ({ data }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10 w-full">

      <div className="rounded-xl py-6 px-6 bg-red-400">
        <h2 className="text-2xl md:text-3xl font-semibold">
          {data.taskNumbers.newTask}
        </h2>
        <h3 className="text-sm md:text-xl font-medium">New Task</h3>
      </div>

      <div className="rounded-xl py-6 px-6 bg-blue-400">
        <h2 className="text-2xl md:text-3xl font-semibold">
          {data.taskNumbers.completed}
        </h2>
        <h3 className="text-sm md:text-xl font-medium">Completed Task</h3>
      </div>

      <div className="rounded-xl py-6 px-6 bg-green-400">
        <h2 className="text-2xl md:text-3xl font-semibold">
          {data.taskNumbers.active}
        </h2>
        <h3 className="text-sm md:text-xl font-medium">Active Task</h3>
      </div>

      <div className="rounded-xl py-6 px-6 bg-yellow-400">
        <h2 className="text-2xl md:text-3xl font-semibold">
          {data.taskNumbers.failed}
        </h2>
        <h3 className="text-sm md:text-xl font-medium">Failed Task</h3>
      </div>

    </div>
  );
};

export default TaskListNumber;