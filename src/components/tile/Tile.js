import React from "react";

export const Tile = (props) => {

  console.log('TILE');
  console.log(props.tile);
  const array = Object.values(props.tile);
  return (
    <div className="tile-container">
    
      {
        
        array.map((item, index) =>  {

          let className;

          if (index === 0){
            className = 'tile-title';
          }else {
            className = 'tile';
          }
         
          return <p className={className} key={index}>{item}</p>
          }
          )
      
      }

    </div>
  );
};
