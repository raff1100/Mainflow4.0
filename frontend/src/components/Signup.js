import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/signup', { username, email, password });
      console.log(res.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Signup</h1>
      <input 
        type="text" 
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        required
      />
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        required
      />
      <button type="submit">Signup</button>
    </form>
  );
}

export default Signup;
