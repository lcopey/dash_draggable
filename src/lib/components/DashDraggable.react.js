import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {DragDropContext} from 'react-beautiful-dnd';
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

        if (!destination) {
        return;
        }

        if (
        destination.droppableId === source.droppableId &&
        destination.index === source.index
        ) {
        return;
        }
        let sourceColumn, destinationColumn, sourceNewItemIds, destinationNewItemIds;
        if (source.droppableId === destination.droppableId) {
            sourceColumn = destinationColumn = this.props.columns[source.droppableId];
            sourceNewItemIds = destinationNewItemIds = Array.from(sourceColumn.itemIds);
        }
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
            columns: {...this.props.columns,
                [source.droppableId]: newSourceColumn,
                [destination.droppableId]: newDestinationColumn
                }
        };
        this.props.setProps(newProps);

    };
    onDragStart = () => {
        // document.body.style.color = 'orange';
        // document.body.style.transition = `background-color 0.2s ease`;
      }
    
    onDragUpdate = update => {
    // const { destination } = update;
    // const opacity = destination ? destination.index / Object.keys(this.state.tasks).length : 0;
    // document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity})`;
    }

    render() {
        const {id, items, columns, columnOrder, showHandle, setProps} = this.props;

        return (
            <div id={id}>
                <DragDropContext
                onDragStart={this.onDragStart}
                onDragUpdate={this.onDragUpdate}
                onDragEnd={this.onDragEnd}>
                    {
                        columnOrder.map(columnId => {
                            const column = {id: columnId, ...columns[columnId]};
                            const columnItems = column.itemIds.map(itemId => {
                                const item = {id: itemId, content: items[itemId]};
                                return item;
                                }
                            );
                            return <Column key={column.id} column={column} items={columnItems} showHandle={showHandle}/>
                        })
                    }
                </DragDropContext>

            </div>
        );
    }
}

DashDraggable.defaultProps = {showHandle: true};

DashDraggable.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,
    items: PropTypes.object,
    columns: PropTypes.object,
    columnOrder: PropTypes.array,
    showHandle: PropTypes.bool,
    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
