import React from "react";
import {Tile} from '../tile/Tile';

export const TileList = (props) => {

  /*Receives an array as props.
  It will be used in Contacts and Appointments page, so array
  can be either Contacts or Appointmens */
    
    return (
    
    <div>
      
      {props.array.map((item, index) => 
      <Tile 
        tile={item} 
        key={index} /> )}

    </div>
  );
};
