import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {DragDropContext} from 'react-beautiful-dnd';
import Column from './column.jsx';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class DashDraggable extends Component {
    onDragEnd = () => {

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
        const {id, tasks, columns, columnOrder, setProps} = this.props;

        return (
            <div id={id}>
                <DragDropContext
                onDragStart={this.onDragStart}
                onDragUpdate={this.onDragUpdate}
                onDragEnd={this.onDragEnd}>
                    {
                        columnOrder.map(columnId => {
                            const column = columns[columnId];
                            const columnTasks = column.taskIds.map((taskId => tasks[taskId]));
                            return <Column key={column.id} column={column} tasks={columnTasks}/>
                        })
                    }
                </DragDropContext>

            </div>
        );
    }
}

DashDraggable.defaultProps = {};

DashDraggable.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,
    tasks: PropTypes.object,
    columns: PropTypes.object,
    columnOrder: PropTypes.array,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
