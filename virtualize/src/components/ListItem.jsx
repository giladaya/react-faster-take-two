import React from "react";

function ListItem(props) {
  const { style, item, starsCount } = props;
  return (
    <div style={style}>
      {JSON.stringify(item)}
      {Array(starsCount)
        .fill(0)
        .map((item, idx) => (
          <span key={idx}>*</span>
        ))}
    </div>
  );
}

export default ListItem;
