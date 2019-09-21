import React from "react";
import ListItem from "./ListItem";

// const style = {height: '20px'};

function List(props) {
  const { data, starsCount } = props;
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
        <ListItem key={item} item={item} starsCount={starsCount} />
      ))}
    </div>
  );
}

export default List;
