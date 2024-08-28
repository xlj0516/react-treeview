import React from 'react';
import PropTypes from 'prop-types';
import styles from './node.less';

const Node = ({ nodeInfo, hasHead, hasTail, direction, configContent }) => {
    const { content, title } = nodeInfo || {};
    const nodeContent = () => {
        return configContent && configContent(nodeInfo) || '节点内容'
    }
    return (
        <div className={`tree-node-wrap ${direction === 'vertical' ? 'tree-node-wrap-vertical' : ''}`}>
            {!!hasHead && <div className='tree-node-before' />}
            <div className={`tree-node ${hasHead ? '' : 'tree-node-noHead'}`}>
                {nodeContent()}
            </div>
            <div
                className={`tree-node-after ${hasTail ? '' : 'tree-node-noTailLine'}`}
            />
        </div>
    );
};
Node.propTypes = {
    nodeInfo: PropTypes.objectOf(),
    hasHead: PropTypes.bool,
    hasTail: PropTypes.bool,
};
Node.defaultProps = {
    nodeInfo: {},
    hasHead: true,
    hasTail: true,
};
export default Node;