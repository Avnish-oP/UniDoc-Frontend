import React, { useState } from 'react';
import axios from 'axios';
import bcrypt from 'bcryptjs';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    try {
      const response = await axios.post('/api/signup', { username, password: hashedPassword });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='flex flex-col gap-4 justify-center items-center min-h-screen'>
      <h1 className='text-3xl'>Signup here</h1>
      <form 
       className='flex flex-col items-center justify-center w-full h-full'
       onSubmit={handleSubmit}>
        <input
          className='p-2 m-2 border-2 border-gray-300 rounded-md w-1/4' 
         type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
        <input 
        className='p-2 m-2 border-2 border-gray-300 rounded-md w-1/4' 
        type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <button className='p-2 bg-blue-500 rounded-md text-white' type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;