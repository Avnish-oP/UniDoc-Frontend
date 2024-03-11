import React, { useState } from "react";

function Login() {
  const [user, setUser]=useState(
    {
      username: '',
      password: ''
    }
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/login', user);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center min-h-screen">
      <h1 className="text-3xl">Login here</h1>
      <form 
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center w-full h-full">
        <input
          className="p-2 m-2 border-2 border-gray-300 rounded-md w-1/4"
          type="text"
          placeholder="Username"
          value={user.username}
          onChange={(e) => setUser({...user, username: e.target.value})}
          required
        />
        <input
          className="p-2 m-2 border-2 border-gray-300 rounded-md w-1/4"
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => setUser({...user, password: e.target.value})}
          required
        />
        <button   className="p-2 bg-blue-500 rounded-md text-white" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
