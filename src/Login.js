import { useState, useContext } from 'react';
import axios from "axios";
import UserContext from "./UserContext";
import { useNavigate } from 'react-router-dom';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const user = useContext(UserContext);

  const navigate = useNavigate();

  function loginUser(e){
    e.preventDefault();
    const data = {email, password};
    axios.post('http://localhost:4000/login', data, {withCredentials: true})
      .then(response => {
        user.setEmail(response.data.email);
        setEmail('');
        setPassword('');
        navigate('/');
      })
      .catch(err => {
        alert('Invalid email or password.');
        console.log(err);
      });
}

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={e => loginUser(e)}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="******************"/>
            <p className="text-red-500 text-xs italic">Please choose a password.</p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-black text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline font-medium"
              type="submit">Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;