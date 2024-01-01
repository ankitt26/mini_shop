import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const user = useSelector((state) => state.login);
  // console.log(user.data.length);

  const isloggedIn = () => {
    if (user.data.length === 0) {
      return <Route path="/" element={<Login />} />;
    } else {
      return <Route path="/" element={<Home />} />;
    }
  };

  return (
    <BrowserRouter>
      <Routes>{isloggedIn()}</Routes>
    </BrowserRouter>
  );
}

export default App;
