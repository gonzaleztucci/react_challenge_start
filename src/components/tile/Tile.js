import React from "react";

export const Tile = (props) => {

  /* Receives a Tile and key as props */

  return (
    <div className="tile-container">
    
      {
        
        Object.values(props.tile).map((item, index) =>  {

          let className;

          if (index === 0){
            className = 'tile-title';
          } else {
            className = 'tile';
          }
         
          return <p className={className} key={index}>{item}</p>
          }
          )
      
      }

    </div>
  );
};
