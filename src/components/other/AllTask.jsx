import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData] = useContext(AuthContext);

  return (
    <div id="tasklist" className="bg-[#1c1c1c] rounded-xl p-5 mt-6 w-full overflow-x-auto">

      {/* Header */}
      <div className="grid grid-cols-5 min-w-[650px] bg-red-400 py-3 px-4 rounded-lg text-sm md:text-base font-semibold">
        <h3>Employee</h3>
        <h3>New Task</h3>
        <h3>Active Task</h3>
        <h3>Completed</h3>
        <h3>Failed</h3>
      </div>

      {/* Employee Data */}
      <div  className="mt-3 flex flex-col gap-2">
        {userData.map((e, idx) => {
          return (
            <div
              key={idx}
              className="grid grid-cols-5 min-w-[650px] border border-emerald-500 py-3 px-4 rounded-lg text-sm md:text-base"
            >
              <h3 className="font-medium">{e.firstName}</h3>
              <h3 className="text-blue-500">{e.taskNumbers.newTask}</h3>
              <h3 className="text-yellow-300">{e.taskNumbers.active}</h3>
              <h3 className="text-green-500">{e.taskNumbers.completed}</h3>
              <h3 className="text-red-500">{e.taskNumbers.failed}</h3>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default AllTask;