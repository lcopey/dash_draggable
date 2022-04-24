import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';


export default class Item extends Component {
    constructor(props) {
        super(props);
        this.onItemClose = this.onItemClose.bind(this);
    }
    onItemClose(event) {
        this.props.item.onItemClose(this);
    }
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
                    // implement close button in case of sourceId in props.item
                    let closeButton;
                    if (this.props.showCloseButton) {
                        const svgButton = <svg viewport="0 0 12 12" className='svg-close-button' transform='translate(-7, -7)'>
                            <circle cx="10" cy="10"
                                r="8" stroke="transparent"
                                strokeWidth="2" fill="red" />
                            <line x1="6" y1="14"
                                x2="14" y2="6"
                                stroke="white"
                                strokeWidth="2" />
                            <line x1="6" y1="6"
                                x2="14" y2="14"
                                stroke="white"
                                strokeWidth="2" />
                        </svg>;
                        closeButton = <button className='close-button' onClick={this.onItemClose}>
                            <i>{svgButton}</i>
                        </button>;
                    }
                    else {
                        closeButton = '';
                    }

                    let suffix = snapshot.isDragging ? 'is-dragging' : '';
                    suffix = this.props.item.sourceId ? suffix + ' w-button' : suffix;
                    const className = 'item-container' + ' ' + suffix;

                    return <div className={className}
                        {...containerProps}>
                        {handle}
                        {this.props.item.content}
                        {closeButton}
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