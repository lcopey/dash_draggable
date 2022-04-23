import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';


export default class Item extends Component {
    render() {
        return (

            // Similarly, Draggable components expects a function as children
            <Draggable draggableId={this.props.item.id} index={this.props.index}>
                {(provided, snapshot) => {
                    let containerProps, handle;
                    if (this.props.showHandle) {
                        containerProps = { ref: provided.innerRef, ...provided.draggableProps };
                        handle = <div className='item-handle' {...provided.dragHandleProps}>{this.props.handleText}</div>;
                    }
                    else {
                        containerProps = { ref: provided.innerRef, ...provided.draggableProps, ...provided.dragHandleProps };
                        handle = '';
                    }
                    const suffix = snapshot.isDragging ? 'is-dragging' : '';
                    const className = 'item-container' + ' ' + suffix;
                    return <div className={className}
                        {...containerProps}
                    >
                        {handle}
                        {this.props.item.content}
                    </div>
                }}
            </Draggable>
        )
    }
}

Item.defaultProps = { showHandle: true, handleText: '' };

Item.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    item: PropTypes.object,
    index: PropTypes.number,
    showHandle: PropTypes.bool,
    handleText: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};