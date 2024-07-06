import React, { useState } from 'react';

const ColorBox = () => {
  const initialBoxes = [
    { id: 1, color: 'green' },
    { id: 2, color: 'red' },
    { id: 3, color: 'purple' },
    { id: 4, color: 'yellow' },
  ];

  const [boxes, setBoxes] = useState(initialBoxes);

  const handleClick = (id) => {
    // find color of box clicked
    const clickedBoxColor = boxes.find(box => box.id === id).color;

    // check after clicked the box change color or not
    const isClickedBoxChanged = boxes.some(box => box.color !== initialBoxes.find(b => b.id === box.id).color);

    const updatedBoxes = boxes.map(box => ({
      ...box,
      color: isClickedBoxChanged ? initialBoxes.find(b => b.id === box.id).color : clickedBoxColor,
    }));

    
    setBoxes(updatedBoxes);
  };

  return (
    <div className="flex justify-center space-x-4 mt-8">
      {boxes.map(box => (
        <div
          key={box.id}
          className={`w-24 h-24 rounded-lg shadow-md bg-${box.color}-500 flex items-center justify-center cursor-pointer`}
          onClick={() => handleClick(box.id)}
        >
          {box.id}
        </div>
      ))}
    </div>
  );
};

export default ColorBox;
