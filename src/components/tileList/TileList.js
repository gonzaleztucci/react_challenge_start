import React from "react";
import {Tile} from '../tile/Tile';

export const TileList = (props) => {
    
  // array.map((item, index) => 
  //       {return <Tile tile={item} key={index}/>;}
  // );

  let array = props.array;

    return (
    
    <div>
      
      {array.map((item, index) => 
      <Tile 
      tile={item} 
      key={index} /> )}
      
    </div>
  );
};
