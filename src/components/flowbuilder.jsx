import React, { useContext, useState, useCallback, useMemo } from 'react';
import ReactFlow, {
    addEdge,
    applyEdgeChanges,
    applyNodeChanges
} from 'reactflow';
import 'reactflow/dist/style.css'; // Importing the React Flow styles
import { ContextData, EdgeContext, SelectNodeContext } from '../context/context'; // Importing contexts
import CustomNode from './customNode'; // Importing the custom node component

const Flowbuilder = () => {
    // Using context to get and set nodes
    const [nodes, setNodes] = useContext(ContextData);
    // Using context to get and set edges
    const [edges, setEdges] = useContext(EdgeContext);
    // Using context to get and set the selected node
    const [selectedNode, setSelectedNode] = useContext(SelectNodeContext);

    // Memoizing the node types to optimize performance
    const nodeTypes = useMemo(() => ({ customNode: CustomNode }), []);

    // State to keep track of the React Flow instance
    const [reactFlowInstance, setReactFlowInstance] = useState(null);

    // Function to generate unique node IDs
    let id = 3;
    const getId = () => `${id++}`;

    // Callback to handle node changes
    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [setNodes],
    );

    // Callback to handle edge changes
    const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [setEdges],
    );

    // Callback to handle new connections (edges)
    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
        [setEdges],
    );

    // Callback to handle drag over events
    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    // Callback to handle drop events (for adding new nodes)
    const onDrop = useCallback(
        (event) => {
            event.preventDefault();

            const type = event.dataTransfer.getData('application/reactflow');

            if (typeof type === 'undefined' || !type) {
                return;
            }

            const position = reactFlowInstance.screenToFlowPosition({
                x: event.clientX,
                y: event.clientY,
            });

            const newNode = {
                id: getId(),
                type: 'customNode',
                position,
                data: { label: 'textNode' },
            };

            setNodes((nds) => nds.concat(newNode));
        },
        [reactFlowInstance, setNodes],
    );

    // Callback to handle node click events
    const onNodeClick = useCallback(
        (event, node) => {
            console.log("Node clicked:", node);
            setSelectedNode(node);
        },
        [setSelectedNode],
    );

    // Callback to handle pane click events (deselecting nodes)
    const onPaneClick = useCallback(
        () => setSelectedNode(null),
        [setSelectedNode],
    );

    return (
        // Container for the React Flow component
        <div className="flowbuilder-container">
            <ReactFlow
                nodes={nodes} // Nodes state
                onNodesChange={onNodesChange} // Handler for node changes
                edges={edges} // Edges state
                onEdgesChange={onEdgesChange} // Handler for edge changes
                onConnect={onConnect} // Handler for new connections
                onInit={setReactFlowInstance} // Handler to initialize the React Flow instance
                onDrop={onDrop} // Handler for drop events
                onDragOver={onDragOver} // Handler for drag over events
                onNodeClick={onNodeClick} // Handler for node click events
                onPaneClick={onPaneClick} // Handler for pane click events
                fitView // Prop to fit the view to the nodes
                nodeTypes={nodeTypes} // Custom node types
            >
            </ReactFlow>
        </div>
    )
}

export default Flowbuilder;
