import React from "react";
import "./App.css";
import VideoGame from "./Components/Video Game/VideoGame";
// import Hero from "./Components/Hero";
import Quiz from "./Components/Quiz/Quiz";
import SpaceNews from "./Components/Space News/SpaceNews";
import Todo from "./Components/Todo/Todo";
import Changer from "./Components/BgChanger/Changer";

function App() {
  return (
    <div className="App">
      <h1 className="top">5 React Projects : </h1>
      {/* <div className="Hero"><Hero/></div> */}
      <div className="BgChanger"><Changer/></div>
      <div className="Todo"><Todo/></div>
      <div className="Quiz"><Quiz/></div>
      <div className="SpaceNews"><SpaceNews/></div>
      <div className="VideoGame"><VideoGame/></div>
    </div>
  );
}

export default App;