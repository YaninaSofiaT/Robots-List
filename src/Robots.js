import React, { useState } from "react";
import RobotsList from "./RobotsList";

const Robots = () => {
  const [input, setInput] = useState("");
  const [robotsList, setRobotsList] = useState([]);

  const handlerClick = () => {
    if (input !== "") {
      setRobotsList([...robotsList, input]);
    }
    setInput("");
    // console.log(robotsList);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        margin: "20px",
        fontFamily: "monospace",
      }}
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="write something"
        onKeyPress={(event) => (event.key === "Enter" ? handlerClick() : null)}
      />
      <button
        onClick={handlerClick}
        onKeyPress={(e) => handlerClick(e)}
        style={{
          marginTop: "10px",
          backgroundColor: "purple",
          color: "white",
          fontFamily: "monospace",
          borderRadius: "3px",
        }}
      >
        Search robot
      </button>
      <h2>Robot list</h2>
      <RobotsList robotsList={robotsList} setRobotsList={setRobotsList} />
    </div>
  );
};
export default Robots;
