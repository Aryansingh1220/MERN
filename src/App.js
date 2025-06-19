import { Navigate, Route,Routes } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import AppLayout from "./layout/Applayout";
import Dashboard from "./pages/Dashboard";
// import { Nav } from "react-bootstrap";
import { useState } from "react";
function App() {
  const [userdetails,setUserDetails]=useState(null);

  const updateUserDetails=(UpdatedData)=>{
    setUserDetails(UpdatedData);
  }
  return (
    
      <Routes>
        <Route path="/" element={userdetails ?
          <Navigate to='/dashboard'/>:
          <AppLayout>
            <Home />
          </AppLayout>
        }/>
        <Route path="/login" element={userdetails?
          <Navigate to='/dashboard'/>:
          <AppLayout>
            <Login updateUserDetails={updateUserDetails} />
          </AppLayout>
        }/>
        <Route path="/dashboard" element={userdetails ?
          <Dashboard/>:
          <Navigate to='/login' />
        }/> 

      </Routes>
  );
}

export default App;