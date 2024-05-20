import React, { useContext } from 'react';
import Flowbuilder from './components/flowbuilder'; // Importing the Flowbuilder component
import './home.css'; // Importing styles
import NodePanel from './components/nodePanel'; // Importing the NodePanel component
import SettingPanel from './components/settingPanel'; // Importing the SettingPanel component
import { AlertContext, ContextData, EdgeContext, SelectNodeContext } from './context/context'; // Importing context

const Home = () => {

  // Fetching global data from Context API
  const [nodes, setNodes] = useContext(ContextData); // Accessing nodes and setNodes from ContextData
  const [edges, setEdges] = useContext(EdgeContext); // Accessing edges and setEdges from EdgeContext
  const [alert, setAlert] = useContext(AlertContext); // Accessing alert and setAlert from AlertContext
  const [selectedNode, setSelectedNode] = useContext(SelectNodeContext); // Accessing selectedNode and setSelectedNode from SelectNodeContext

  // Function to handle changes to a specific node
  const handleNodeChange = (updatedNode) => {
    setNodes((prevNodes) =>
      prevNodes.map((node) => (node.id === updatedNode.id ? updatedNode : node))
    );
  };

  // Function to validate all nodes are connected 
  const validateNodes = () => {
    const allNodesConnected = nodes.every(node =>
      edges.some(edge => edge.source === node.id || edge.target === node.id)
    );
    if (!allNodesConnected) {
      setAlert({ show: true, message: 'Cannot save Flow', type: 'danger' });
      return false;
    }
    return true;
  };

  // Function to save flow
  const handleChanges = () => {
    if (validateNodes()) {
      const flowData = { nodes, edges };
      localStorage.setItem('flowData', JSON.stringify(flowData));
      setAlert({ show: true, message: 'Flow saved!', type: 'success' });
      console.log("alert", alert)
    }
  };

  return (
    <div>

      {/* Header section */}
      <header class="header container-fluid bg-light d-flex justify-content-end py-3 px-5">
        <button class="save-button" onClick={handleChanges}>Save changes</button> {/* Button to save changes */}
      </header>

      {/* Main section with Text Node and setting panel/ Node panel */}
      <section class="main-section d-flex " >
        <Flowbuilder /> {/* Render the Flowbuilder component */}
        <aside className='sidebar'>
          {/* Conditional rendering for setting panel and node Panel */}
          {selectedNode ? (
            <SettingPanel
              node={selectedNode}
              onNodeChange={handleNodeChange}
            />
          ) : (
            <NodePanel />
          )}
        </aside>
      </section>

      {/* Conditional rendering Alert section */}
      {alert.show && (
        <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
          {alert.message} {/* Display alert message */}
          <button type="button" className="btn-close" aria-label="Close" onClick={() => setAlert({ show: false, message: '', type: '' })}></button> {/* Button to close the alert */}
        </div>
      )}

    </div>
  )
}

export default Home;
