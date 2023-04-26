import React from "react";

const RobotsList = ({ robotsList, setRobotsList }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", width: 800 }}>
      {robotsList.map((element, index) => {
        return (
          <img
            style={{
              width: 150,
            }}
            key={index}
            src={`https://robohash.org/${element}`}
            alt={element}
            onClick={() =>
              setRobotsList(robotsList.filter((robot) => robot !== element))
            }
          />
        );
      })}
    </div>
  );
};

export default RobotsList;
