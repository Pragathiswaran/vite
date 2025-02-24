import React, { useState } from 'react';

const DraggableList = () => {
  const [items, setItems] = useState([
    'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'
  ]);

  const [draggedIndex, setDraggedIndex] = useState(null);

  const handleDragStart = (index) => (e) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (index) => (e) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;
    
    const newList = [...items];
    const movedItem = newList.splice(draggedIndex, 1)[0];
    newList.splice(index, 0, movedItem);

    setDraggedIndex(index);
    setItems(newList);
  };

  const handleDrop = () => {
    setDraggedIndex(null);
  };

  return (
    <div className="w-60 border-2 border-white p-2">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-green-500 p-2 m-1 cursor-pointer transition-all duration-150 hover:scale-110 focus:scale-125"
          draggable
          onDragStart={handleDragStart(index)}
          onDragOver={handleDragOver(index)}
          onDrop={handleDrop}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default DraggableList;
