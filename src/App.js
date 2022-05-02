import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import FieldList from "./Components/FieldList/FieldList";
import Home from "./Components/Home/Home";
import SignIn from "./Components/Login Register/SignIn";
import SignUp from "./Components/Login Register/SignUp";
import NavBar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import PrivateRoute from "./Private/PrivateRoute";

function App() {
  const token = localStorage.getItem("token");
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/FieldList" element={<FieldList />} />
        <Route
          path="/Profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
