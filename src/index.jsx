import React from 'react';
import Node from './node';
import styles from './index.less';

const Tree = ({ treeData, childrenName = 'children' }) => {
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
                    // <div className={styles.nodeSingleWrap}>
                    <div className="nodeSingleWrap">
                        <Node nodeInfo={node} hasTail={!!sonNode?.length} />
                        {sonNode?.length > 0 && renderChildren(sonNode)}
                    </div >
                );
            }
            // 后代为多节点分支需要画连接线
            return (
                // <div className={styles.branchWrap}/>
                <div className="branchWrap">
                    {child.map((item, index) => {
                        const sonNode = item[childrenName];
                        return (
                            // <div className={styles.branch}>
                            <div className="branch">
                                {/* {index !== 0 && <div className={styles.leftTopHalfLine} />} */}
                                {index !== 0 && <div className="leftTopHalfLine" />}
                                {/* {index !== number - 1 && <div className={styles.leftBottomHalfLine} />} */}
                                {index !== number - 1 && <div className="leftBottomHalfLine" />}
                                <Node nodeInfo={item} hasTail={!!sonNode?.length} />
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
        // <div className={styles['tree-gragh']}>
        <div className='tree-gragh'>
            {/* <div className={styles.head}> */}
            <div className="head">
                <Node nodeInfo={treeData} hasHead={false} />
            </div>
            <>{renderChildren(children)}</>
        </div >
    );
};
export default Tree;