import React, { useState } from 'react'
import { AlertContext, ContextData, EdgeContext, SelectNodeContext, } from './context';

// The Myprovider component is a context provider that supplies various pieces of state to its children components.
export const Myprovider = ({ children }) => {

  // State for nodes, which is an array of objects, each representing a node with specific properties
  const [nodes, setNodes] = useState([
    {
      id: '1',
      type: 'customNode',
      data: { label: 'test message 1' },
      position: { x: -300, y: 0 },
    },
    {
      id: '2',
      type: 'customNode',
      data: { label: 'test message 2' },
      position: { x: -50, y: -50 },
    },
  ]);

  // State to manage edges, initially set with one example edge connecting the two nodes
  const [edges, setEdges] = useState([{ id: 'edges-e1-2', source: '1', target: '2' }]);

  // State to manage the currently selected node, initially set to null
  const [selectedNode, setSelectedNode] = useState(null);

  // State to manage alert information, initially set with default values
  const [alert, setAlert] = useState({ show: false, message: '', type: '' });

  return (
    // Provide the nodes state and its updater function to the context
    <ContextData.Provider value={[nodes, setNodes]}>
      <EdgeContext.Provider value={[edges, setEdges]}>
        <SelectNodeContext.Provider value={[selectedNode, setSelectedNode]}>
          <AlertContext.Provider value={[alert, setAlert]}>
            {/* Render the children components that will have access to these contexts */}
            {children}
          </AlertContext.Provider>
        </SelectNodeContext.Provider>
      </EdgeContext.Provider>
    </ContextData.Provider>
  )
}
