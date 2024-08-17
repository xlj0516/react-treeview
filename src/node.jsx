import React from 'react';
import PropTypes from 'prop-types';
import styles from './node.less';

const Node = ({ nodeInfo, hasHead, hasTail }) => {
    const { content, title } = nodeInfo || {};
    return (
        <div className='tree-node-wrap'>
            {!!hasHead && <div className='tree-node-before' />}
            <div className={`tree-node ${hasHead ? '' : 'tree-node-noHead'}`}>
                <div className='tree-title'>
                    {title}
                </div>
                <div className='tree-content'>
                    {content}
                </div>
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