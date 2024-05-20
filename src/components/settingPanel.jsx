import React, { useEffect, useState } from 'react';
import { IoMdArrowBack } from "react-icons/io"; // Importing an icon for back arrow
import '../home.css'; // Importing CSS for styling

const SettingPanel = ({ node, onNodeChange }) => {
  // State to manage the text in the textarea, initialized with the node's label
  const [text, setText] = useState(node.data.label);

  // useEffect hook to update the text state whenever the node prop changes
  useEffect(() => {
    setText(node.data.label);
  }, [node]);

  // Handler function for text change in the textarea
  const handleTextChange = (e) => {
    const newText = e.target.value; // Getting the new text from the textarea
    setText(newText); // Updating the local state with the new text
    const updatedNode = {
      ...node, // Spreading the current node properties
      data: {
        ...node.data, // Spreading the current node data
        label: newText, // Updating the label with the new text
      },
    };
    onNodeChange(updatedNode); // Calling the onNodeChange function with the updated node
  };

  return (
    <div className='updatemessage'>
      {/* Header section with a back arrow icon and a message label */}
      <div className='mb-4 d-flex justify-content-start border-bottom align-items-center py-2 px-3 updatingElement'>
        <IoMdArrowBack /> 
        <span className="settings-message">
          Message
        </span>
      </div>

      {/* Textarea for updating the node label */}
      <div className='px-3 pb-3 border-bottom'>
        <label className="settings-label mb-2">
          Text
        </label>
        <textarea
          className='p-2'
          value={text} // Value of the textarea is controlled by the text state
          onChange={handleTextChange} // Handler for change events
          rows={5} // Number of rows for the textarea
        />
      </div>
    </div>
  );
};

export default SettingPanel;
