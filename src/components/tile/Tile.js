import React from "react";

export const Tile = (props) => {

  console.log('TILE');
  console.log(props.tile);
  const array = Object.values(props.tile);
  return (
    <div className="tile-container">
    
    {array.map((item, index) =>  <p>{item}</p>)}

    </div>
  );
};
