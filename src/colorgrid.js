// src/ColorGrid.js
import React from 'react';


const ColorGrid = () => {
  

  const colors = [
    '#21262d', // AURORA BLACK
    '#f5f5f5', // whitesmoke
    // '#0000FF', //BLUE
    // '#FFFF00', //YELLOW
    // '#00FFFF', //CYAN
    // '#FF00FF', //MAGENTA
    // '#4CAF50', //EMERALD
    // '#1E88E5', //OCEAN BLUE
    // '#673AB7', //PURPLE MAJESTY
    // '#E53935', //SCARLET
    // '#00BCD4', //TURQUOISE
    // '#9C27B0', //FUCHSIA
    // '#8BC34A', //LIME
    // '#7E57C2', //LAVENDA
    // '#FFEB3B', //DAFFODIL
  ];

  const handleColorClick = (color) => {
    
    document.body.style.backgroundColor = color;
    // document.form.style.backgroundColor = color;
    
  };

  return (
    <div>
      {/* <h2 style={{display:'flex', justifyContent:'center', color: prevColor,}} onClick={() => handleColorClick(prevColor)}>Background Color Changer</h2> */}
      <div style={{ display: 'grid', gridTemplateColumns: '35px repeat(1, 35px)', gap: '2px', width: '110%', height: '110%', maxWidth: '300px', overflow: 'none',
      }}>
        
        {colors.map((color, index) => (
          <div key={index} style={{
            width: '35px',
            height: '35px',
            backgroundColor: color,
            cursor: 'pointer',
            border: '1px solid black',
            borderRadius:'20px',
            
          }}
          onClick={() => handleColorClick(color)} ></div>
        ))}
      </div>
    </div>
  );
};

export default ColorGrid;
