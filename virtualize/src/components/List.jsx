import React from "react";
import ListItem from "./ListItem";

// const style = {height: '20px'};

function List(props) {
  console.log("Render List");
  const { data, starsCount, color } = props;
  return (
    <div
      style={{
        height: "300px",
        width: "300px",
        overflow: "auto",
        border: "2px solid orange"
      }}
    >
      {data.map(item => (
        <ListItem
          key={item}
          item={item}
          starsCount={starsCount}
          color={color}
        />
      ))}
    </div>
  );
}

export default List;
