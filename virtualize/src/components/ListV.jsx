import React from "react";
import { FixedSizeList as List } from "react-window";
import ListItem from "./ListItem";

function getRowRenderer(data, starsCount) {
  return ({ index, style }) => (
    <ListItem
      style={style}
      item={data[index]}
      starsCount={starsCount}
    />
  );
}

function ListV(props) {
  const { data, starsCount } = props;
  const Row = getRowRenderer(data, starsCount);
  return (
    <List
      width={300}
      height={300}
      itemCount={data.length}
      itemSize={20}
      style={{ border: "2px solid blue" }}
    >
      {Row}
    </List>
  );
}

export default ListV;
