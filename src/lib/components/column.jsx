import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';
import Item from './item.jsx'



export default class Column extends Component {
    constructor(props) {
        super(props);
        this.state = { searchValue: '' };
        this.setSearchValue = this.setSearchValue.bind(this);
    }

    setSearchValue(e) {
        this.setState({ searchValue: e.target.value });
    }

    render() {
        const title = this.props.column.title ? <div
            className='column-title'>
            {this.props.column.title}
        </div> : '';

        const input = this.props.column.searchable ? <input
            className='search-input'
            input='text'
            value={this.state.searchValue}
            placeholder='Search'
            onChange={this.setSearchValue} /> : '';

        const direction = this.props.column.direction ?
            this.props.column.direction : this.props.direction;
        const customClassName = this.props.column.className ?
            this.props.column.className : '';

        return (
            <div className='column-container'>
                {title}

                {/* Droppable needs to have its children as a function
                So everything is wrapped into a function taking provided 
                as parameters and returns our DOM Component */}
                <Droppable droppableId={this.props.column.id} direction={direction}>
                    {(provided, snapshot) => {
                        const classSuffix = snapshot.isDraggingOver ? 'dragged-over' : '';
                        const className = 'item-list' + ' ' + classSuffix + ' ' + direction + ' ' + customClassName;

                        // filter items if the column is searchable
                        let items;
                        if (this.props.column.searchable & this.state.searchValue !== '') {
                            items = this.props.items.filter(item => item.content.includes(this.state.searchValue));
                        }
                        else {
                            items = this.props.items;
                        }

                        return <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className={className}
                        >
                            {input}
                            {items.map((item, index) => {
                                const showCloseButton = (item.sourceId != undefined) && (item.sourceId != this.props.column.id);
                                return <Item key={item.id} item={item} index={index}
                                    showHandle={this.props.showHandle}
                                    handleText={this.props.handleText}
                                    columnId={this.props.column.id}
                                    showCloseButton={showCloseButton}
                                    direction={direction} />
                            })}
                            {provided.placeholder}
                        </div>
                    }
                    }
                </Droppable>
            </div>
        )
    }
}

Column.defaultProps = { showHandle: true, handleText: '', direction: 'vertical' };

Column.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    items: PropTypes.array,
    column: PropTypes.object,
    showHandle: PropTypes.bool,
    handleText: PropTypes.string,
    // should be one of 'horizontal' | 'vertical'
    direction: PropTypes.oneOf(['horizontal', 'vertical']),

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};