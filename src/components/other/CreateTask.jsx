import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {

  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [asignTo, setAsignTo] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      taskTitle,
      taskDate,
      taskDescription,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false
    };

    const data = [...userData];

    data.forEach((e) => {
      if (asignTo === e.firstName) {
        e.tasks.push(newTask);
        e.taskNumbers.newTask = e.taskNumbers.newTask + 1;
      }
    });

    setUserData(data);

    setAsignTo("");
    setCategory("");
    setTaskTitle("");
    setTaskDate("");
    setTaskDescription("");
  };

  return (
    <div className="p-6 bg-[#1c1c1c] mt-8 rounded-xl w-full">

      <form
        onSubmit={submitHandler}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >

        {/* Left Inputs */}
        <div className="flex flex-col gap-4">

          <div>
            <h3 className="text-sm text-gray-300 mb-1">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="w-full text-sm py-2 px-3 rounded bg-transparent border border-gray-400 outline-none"
              type="text"
              placeholder="Make a UI design"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-1">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="w-full text-sm py-2 px-3 rounded bg-transparent border border-gray-400 outline-none"
              type="date"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-1">Assign To</h3>
            <input
              value={asignTo}
              onChange={(e) => setAsignTo(e.target.value)}
              className="w-full text-sm py-2 px-3 rounded bg-transparent border border-gray-400 outline-none"
              type="text"
              placeholder="Employee Name"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-1">Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full text-sm py-2 px-3 rounded bg-transparent border border-gray-400 outline-none"
              type="text"
              placeholder="Design, Dev, etc"
            />
          </div>

        </div>

        {/* Right Side */}
        <div className="flex flex-col">

          <h3 className="text-sm text-gray-300 mb-1">Description</h3>

          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full h-40 text-sm py-2 px-3 rounded bg-transparent border border-gray-400 outline-none"
          ></textarea>

          <button className="bg-emerald-500 hover:bg-emerald-600 transition py-3 px-5 rounded mt-4 text-sm w-full">
            Create Task
          </button>

        </div>

      </form>

    </div>
  );
};

export default CreateTask;