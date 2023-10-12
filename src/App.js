import React from "react";
import Login from "./components/login";
import EditProfile from "./components/EditProfile";
import Dashboard from './components/dashboard';
import { Routes, Route  } from "react-router-dom";

function App() {
  return (
    <Routes>
      {/* <Switch> */}
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/EditProfile" element={<EditProfile/>} />
        <Route path="/" element={<Login/>} />
      {/* </Switch> */}
    </Routes>
  );
}

export default App;
