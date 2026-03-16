import React from "react";
import Header from "../other/Header";
import TaskListNumber from "../other/TaskListNumber";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = (props) => {
  return (
    <div className="min-h-screen w-full  px-4 sm:px-6 md:px-10 py-6">

      <div className="max-w-7xl mx-auto flex flex-col gap-8">

        <Header changeUser={props.changeUser} data={props.data} />

        <TaskListNumber data={props.data} />

        <TaskList data={props.data} />

      </div>

    </div>
  );
};

export default EmployeeDashboard;