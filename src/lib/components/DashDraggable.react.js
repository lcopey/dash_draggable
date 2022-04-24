import React, { Component } from 'react';
import PropTypes, { string } from 'prop-types';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './column.jsx';
import './style.css';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class DashDraggable extends Component {

    onDragEnd = result => {
        const { destination, source, draggableId } = result;
        this.move(destination, source, draggableId);
    }

    onDragStart = () => {
    }

    onDragUpdate = update => {
    }

    onItemClose = (item) => {
        // find source column id
        //      corresponding index in the column
        // destination id should be item.sourceId
        //      last index in the column
        // draggableId is the itemId
        const itemId = item.props.item.id;
        const sourceId = item.props.columnId;
        const destinationId = item.props.item.sourceId;
        const sourceIndex = item.props.index;

        const destination = { droppableId: destinationId, index: 0 };
        const source = { droppableId: sourceId, index: sourceIndex };
        this.move(destination, source, itemId)
    }

    move = (destination, source, draggableId) => {

        // If destination is null, cancel the drag and drop move
        if (!destination) {
            return;
        }

        // If the item is dropped at the same place
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        let sourceColumn, destinationColumn, sourceNewItemIds, destinationNewItemIds;
        // In case it is just a swap between two items in the same container
        if (source.droppableId === destination.droppableId) {
            sourceColumn = destinationColumn = this.props.columns[source.droppableId];
            sourceNewItemIds = destinationNewItemIds = Array.from(sourceColumn.itemIds);
        }
        // In case the source and the destination are different
        else {
            sourceColumn = this.props.columns[source.droppableId];
            destinationColumn = this.props.columns[destination.droppableId];

            sourceNewItemIds = Array.from(sourceColumn.itemIds);
            destinationNewItemIds = Array.from(destinationColumn.itemIds);
        }

        sourceNewItemIds.splice(source.index, 1);
        destinationNewItemIds.splice(destination.index, 0, draggableId);

        const newSourceColumn = {
            ...sourceColumn,
            itemIds: sourceNewItemIds
        };
        const newDestinationColumn = {
            ...destinationColumn,
            itemIds: destinationNewItemIds
        };

        const newProps = {
            ...this.props,
            columns: {
                ...this.props.columns,
                [source.droppableId]: newSourceColumn,
                [destination.droppableId]: newDestinationColumn
            }
        };
        this.props.setProps(newProps);
    }

    render() {
        const { id, items, columns, columnOrder, className, setProps } = this.props;

        return (
            <div id={id} className={className}>
                <DragDropContext
                    onDragStart={this.onDragStart}
                    onDragUpdate={this.onDragUpdate}
                    onDragEnd={this.onDragEnd}>
                    {
                        columnOrder.map(columnId => {
                            const column = { id: columnId, ...columns[columnId] };
                            const columnItems = column.itemIds.map(itemId => {
                                const item = { id: itemId, onItemClose: this.onItemClose, ...items[itemId] };
                                return item;
                            });

                            return <Column key={column.id} column={column} items={columnItems}
                                showHandle={this.props.showHandle} handleText={this.props.handleText}
                                direction={this.props.droppableDirection} />
                        })
                    }
                </DragDropContext>
            </div>
        );
    }
}

DashDraggable.defaultProps = { showHandle: true, handleText: '', droppableDirection: 'vertical' };

DashDraggable.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,
    items: PropTypes.object,
    columns: PropTypes.object,
    columnOrder: PropTypes.array,
    showHandle: PropTypes.bool,
    handleText: PropTypes.string,
    className: PropTypes.string,
    // should be one of 'horizontal' | 'vertical'
    droppableDirection: PropTypes.oneOfType([PropTypes.oneOf(['horizontal', 'vertical']), PropTypes.object]),
    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
