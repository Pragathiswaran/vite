import React, { useState } from "react";

const DraggableList = () => {
  const [items, setItems] = useState(Array.from({ length: 5}, (_, i) => `Item ${i + 1}`));
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleDragStart = (index) => (e) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", index);
    // console.log(e.dataTransfer )
  };

  const handleDragEnter = (index) => (e) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;

    const newList = [...items];
    const [movedItem] = newList.splice(draggedIndex, 1);
    newList.splice(index, 0, movedItem);

    setItems(newList);
    setDraggedIndex(index);
    setHoverIndex(index);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
    setHoverIndex(null);
  };

  return (
    <div className="w-60 border-2 border-white p-2 rounded-lg bg-gray-800 shadow-lg">
      {items.map((item, index) => (
        <div
          key={index}
          className={`bg-green-500 p-2 m-1 cursor-pointer transition-all duration-150 rounded-lg text-white text-center ${
            hoverIndex === index ? "scale-110 bg-green-600" : ""
          } hover:scale-110`}
          draggable={true}
          onDragStart={handleDragStart(index)}
          onDragEnter={handleDragEnter(index)}
          onDragEnd={handleDragEnd}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default DraggableList;
