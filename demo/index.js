import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import MyComponent from '../src/index';
import data from './data';
import './index.less';
const App = () => {
    const [treeData] = useState(data)
    const node1 = (node) => {
        return <div className='content-wrap'><div className='tree-title'>{node.title}</div><div className='tree-content'>{node.content}</div></div>
    };
    const node2 = (node) => { return <div className='tree-content'>{node.content}</div> }
    return <>< MyComponent treeData={treeData} childrenName="children" direction='vertical' nodeContent={node1} />
        < MyComponent treeData={treeData} childrenName="children" nodeContent={node2} /></>
};
ReactDOM.render(<App />, document.getElementById("root"))