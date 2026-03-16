import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full px-4">
      
      <div className="border border-emerald-600 w-full max-w-md p-8 md:p-10 rounded-2xl backdrop-blur-md bg-white/5">

        <form
          onSubmit={submitHandler}
          className="flex flex-col gap-4"
        >

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="text-white outline-none border border-emerald-600 bg-transparent rounded-full py-3 px-5 text-base md:text-lg w-full"
            type="email"
            placeholder="Enter your email"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="text-white outline-none border border-emerald-600 bg-transparent rounded-full py-3 px-5 text-base md:text-lg w-full"
            type="password"
            placeholder="Enter your password"
          />

          <button className="text-white border border-emerald-600 bg-emerald-600 rounded-full py-3 text-base md:text-lg mt-2 hover:bg-emerald-700 transition">
            Log In
          </button>

        </form>
      </div>
    </div>
  );
};

export default Login;