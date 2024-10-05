import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Todo from "./Components/Todo/Todo";
import Quiz from "./Components/Quiz/Quiz";
import SpaceNews from "./Components/Space News/SpaceNews";
import VideoGame from "./Components/Video Game/VideoGame";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Todo" element={<Todo/>} />
      <Route path="/Quiz" element={<Quiz/>} />
      <Route path="/SpaceNews" element={<SpaceNews/>} />
      <Route path="/VideoGame" element={<VideoGame/>} />
    </Routes>
  );
}

export default App;
