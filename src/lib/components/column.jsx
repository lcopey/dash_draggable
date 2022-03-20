import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Task from './task.jsx'

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
`;
const Title = styled.h3`
    padding: 8px;
`;
const TaskList = styled.div`
    padding: 8px;
    background-color: ${props => props.isDraggingOver ? 'aliceblue' : 'white'};x
`;


export default class Column extends Component {
    render() {
        let title;
        if (this.props.column.title) {
            title = <Title>{this.props.column.title}</Title>
        }
        else {
            title = '';
        }

        return (
        <Container>
            {title}
            {/* Droppable needs to have its children as a function
            So everything is wrapped into a function taking provided as parameters and returns our DOM Component */}
            <Droppable droppableId={this.props.column.id}>
                {(provided, snapshot) => (
                    <TaskList
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    isDraggingOver={snapshot.isDraggingOver}
                    >
                        {this.props.tasks.map((task, index) =>
                            <Task key={task.id} task={task} index={index}/>)}
                        {provided.placeholder}
                    </TaskList>
                )}
            </Droppable>
        </Container>
        )
    }
}

Column.defaultProps = {};

Column.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    tasks: PropTypes.array,
    column: PropTypes.object,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};