import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashboard = (props) => {
  return (
    <div className="min-h-screen w-full px-4 sm:px-6 md:px-10 py-6">

      <div className="max-w-7xl mx-auto flex flex-col gap-8">

        <Header changeUser={props.changeUser} />

        <CreateTask />

        <AllTask />

      </div>

    </div>
  );
};

export default AdminDashboard;