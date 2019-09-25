import React from "react";
import { FixedSizeList as List } from "react-window";
import ListItem from "./ListItem";

function getRowRenderer(data, starsCount, color) {
  return ({ index, style }) => (
    <ListItem
      style={{ ...style, color }}
      item={data[index]}
      starsCount={starsCount}
    />
  );
}

function ListV(props) {
  const { data, starsCount, color } = props;
  const Row = getRowRenderer(data, starsCount, color);
  return (
    <List
      width={300}
      height={200}
      itemCount={data.length}
      itemSize={20}
      style={{ border: "2px solid blue" }}
    >
      {Row}
    </List>
  );
}

export default ListV;
