import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

// const Container = styled.div`
//     border-radius: 2px;
//     padding: 8px;
//     margin-bottom: 8px;
//     background-color: ${props => (props.isDragging ? 'whitesmoke' : 'white')};
//     box-shadow: 1px 1px 5px lightgrey;
//     display: flex;
// `;

// const Handle = styled.div`
//     width: 20px;
//     height: 20px;
//     background-color: orange;
//     border-radius: 4px;
//     margin-right: 8px;
// `

export default class Item extends Component {
    render() {
        return (

            // Similarly, Draggable components expects a function as children
            <Draggable draggableId={this.props.item.id} index={this.props.index}>
                {(provided, snapshot) => {
                    let containerProps, handle;
                    if (this.props.showHandle) {
                        containerProps = {ref: provided.innerRef, ...provided.draggableProps};
                        handle = <div className='item-handle' {...provided.dragHandleProps}>{this.props.handleText}</div>;
                    }
                    else {
                        containerProps = {ref: provided.innerRef, ...provided.draggableProps, ...provided.dragHandleProps};
                        handle = '';
                    }
                    const isDragging = snapshot.isDragging;
                    return <div className={snapshot.isDragging ? 'item-container-is-dragging' : 'item-container'}
                                {...containerProps}
                                isDragging={snapshot.isDragging}
                            >
                                {handle}
                                {this.props.item.content}
                            </div>
                }}
            </Draggable>
        )
    }
}

Item.defaultProps = {showHandle: true, handleText: ''};

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