import React from "react";

const Header = (props) => {

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser(null);
  };

  return (
    <div className="flex items-center justify-between">

      <h1 className="text-lg sm:text-2xl font-medium leading-tight">
        Hello, <br />
        <span className="text-xl sm:text-3xl font-semibold">
          {props.data ? props.data.firstName : "Admin"} 👋
        </span>
      </h1>

      <button
        onClick={logOutUser}
        className="bg-red-600 hover:bg-red-700 transition text-sm sm:text-lg font-medium px-4 py-2 rounded-md"
      >
        Log Out
      </button>

    </div>
  );
};

export default Header;