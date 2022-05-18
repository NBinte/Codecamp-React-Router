import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import About from "./Pages/About";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Post from "./Pages/Post";
import Profile from "./Pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/post/:id" element={<Post />} /> */}
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
