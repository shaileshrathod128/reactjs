import React, { useState } from "react";

type Item = { id: number; text: string };

const DragDropBoard: React.FC = () => {
  const [items, setItems] = useState<Item[]>([
    { id: 1, text: "React" },
    { id: 2, text: "TypeScript" },
    { id: 3, text: "Drag & Drop" },
  ]);

  const onDragStart = (e: React.DragEvent, id: number) => {
    e.dataTransfer.setData("itemId", id.toString());
  };

  const onDrop = (e: React.DragEvent) => {
    const id = parseInt(e.dataTransfer.getData("itemId"));
    const newItems = items.filter((item) => item.id !== id);
    const draggedItem = items.find((item) => item.id === id);
    if (draggedItem) setItems([...newItems, draggedItem]);
  };

  return (
    <div onDragOver={(e) => e.preventDefault()} onDrop={onDrop}>
      {items.map((item) => (
        <div
          key={item.id}
          draggable
          onDragStart={(e) => onDragStart(e, item.id)}
        >
          {item.text}
        </div>
      ))}
    </div>
  );
};

export default DragDropBoard;
