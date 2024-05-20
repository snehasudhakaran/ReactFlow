import React from 'react';
import { BiMessageRoundedDetail } from "react-icons/bi"; // Importing an icon for the node

const NodePanel = () => {
  // Function to handle the drag start event
  const onDragStart = (e, value) => {
    e.dataTransfer.setData('application/reactflow', value); // Setting the data for the drag event
    e.dataTransfer.effectAllowed = 'move'; // Setting the allowed effect for the drag event
  };

  return (
    // The div is draggable and starts the drag with 'default' value on drag start
    <div 
      draggable 
      className="px-5 py-2 m-2 d-flex flex-column message align-items-center" 
      onDragStart={(e) => onDragStart(e, 'default')}
    >
      {/* Icon representing the node */}
      <div className="icon">
        <BiMessageRoundedDetail /> 
      </div>
      {/* Text label for the node */}
      <div className='message-text'>Message</div>
    </div>
  );
};

export default NodePanel;
