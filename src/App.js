import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import About from "./Pages/About";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Post from "./Pages/Post";
import Profile from "./Pages/Profile";

function App() {
  const [login, setlogin] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <button
          onClick={() => {
            setlogin(!login);
          }}
        >
          {login ? "Logout" : "Login"}
        </button>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/profile"
            element={login ? <Profile /> : <Navigate to="/" />}
          />
          <Route path="/post/:id" element={<Post />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
