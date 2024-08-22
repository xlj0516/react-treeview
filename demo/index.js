import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import MyComponent from '../src/index';
const App = () => {
    const [treeData] = useState({ title: '1', content: '1', children: [{ title: '1-1', content: '1-1', children: [{ title: '1-1-1', content: '1-1-1', children: [] }] }, { title: '1-2', content: '1-2', children: [{ title: '1-2-1', content: '1-2-1', children: [] }, { title: '1-2-2', content: '1-2-2', children: [] }] }] })
    return <>< MyComponent treeData={treeData} childrenName="children" direction='vertical' />
        < MyComponent treeData={treeData} childrenName="children" /></>
};
ReactDOM.render(<App />, document.getElementById("root"))