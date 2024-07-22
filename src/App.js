import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';
import Register from "./Register";
import UserContext from "./UserContext";
import {useState, useEffect} from "react";
import axios from "axios";
import Login from "./Login";
import Home from "./Home";

function App() {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const token = document.cookie.split('; ').find(row => row.startsWith('token='));
    if (!token) {
      console.log('No token found, user not logged in');
    } else {
      axios.get('http://localhost:4000/user', {withCredentials: true})
        .then(response => {
          setEmail(response.data.email);
        })
        .catch(err => console.log(err));
    }
  }, []);

  function logOut(){
    axios.post('http://localhost:4000/logout', {}, {withCredentials: true})
      .then(response => {
        setEmail('');
      })
      .catch(err => console.log(err));
  }

  return (
    <UserContext.Provider value={{email, setEmail}}>
      <Router>
        {/*<div>*/}
        {/*  {!!email && (*/}
        {/*    <div>*/}
        {/*      Log in as {email}*/}
        {/*      <button onClick={() => logOut()}>Log Out</button>*/}
        {/*    </div>*/}
        {/*  )}*/}
        {/*  {!email && (*/}
        {/*    <div>Not logged in</div>*/}
        {/*  )}*/}
        {/*</div>*/}
        {/*<hr/>*/}
        {/*<div>*/}
        {/*  <Link to="/">Home</Link> |*/}
        {/*  <Link to="/login">Login</Link> |*/}
        {/*  <Link to="/register">Register</Link>*/}
        {/*</div>*/}
        <hr/>
        <Routes>
          <Route path="/" element={<Home email={email} logOut={logOut}/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
        <hr/>
      </Router>
    </UserContext.Provider>
  );
}

export default App;