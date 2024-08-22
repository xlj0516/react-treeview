import React from 'react';
import Node from './node';
import styles from './index.less';

const Tree = ({ treeData, childrenName = 'children', direction = 'horizontal' }) => {
    const children = treeData[childrenName];
    const renderChildren = (child) => {
        const number = child?.length;
        // 判断子元素是否存在
        if (number) {
            // 后代为单节点
            if (number === 1) {
                const node = child[0] || {};
                const sonNode = node[childrenName];
                return (
                    <div className="nodeSingleWrap">
                        <Node nodeInfo={node} hasTail={!!sonNode?.length} direction={direction} />
                        {sonNode?.length > 0 && renderChildren(sonNode)}
                    </div >
                );
            }
            // 后代为多节点分支需要画连接线
            return (
                <div className="branchWrap">
                    {child.map((item, index) => {
                        const sonNode = item[childrenName];
                        return (
                            <div className="branch">
                                {direction === 'horizontal' && index !== 0 && <div className="leftTopHalfLine" />}
                                {direction === 'horizontal' && index !== number - 1 && <div className="leftBottomHalfLine" />}
                                {direction === 'vertical' && index !== 0 && <div className="leftHalfLine" />}
                                {direction === 'vertical' && index !== number - 1 && <div className="rightHalfLine" />}
                                <Node nodeInfo={item} hasTail={!!sonNode?.length} direction={direction} />
                                {sonNode?.length > 0 && renderChildren(sonNode)}
                            </div>
                        );
                    })}
                </div>
            );
        }
        return '';
    };
    return (
        <div className={`tree-gragh ${direction === 'vertical' ? 'tree-gragh-vertical' : ''}`}>
            <div className="head">
                <Node nodeInfo={treeData} hasHead={false} direction={direction} />
            </div>
            <>{renderChildren(children)}</>
        </div >
    );
};
export default Tree;