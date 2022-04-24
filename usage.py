import dash_draggable
import dash
from dash.dependencies import Input, Output
from dash import html

app = dash.Dash(__name__)

app.layout = html.Div([
    dash_draggable.DashDraggable(
        id='input',
        items={'task-1': {'content': 'Take out the garbage', 'sourceId': 'column-1'},
               'task-2': {'content': 'Watch my favorite show', 'sourceId': 'column-1'},
               'task-3': {'content': 'Charge my phone', 'sourceId': 'column-1'},
               'task-4': {'content': 'Look at the windows'}},
        columns={'column-1': {'itemIds': ['task-1', 'task-2'], 'direction': 'horizontal'},
                 'column-2': {'title': 'To Do', 'itemIds': ['task-3', 'task-4'], 'searchable': True}},
    columnOrder=['column-1', 'column-2'],
    showHandle=True,
    # handleText='\u2630',
    droppableDirection='vertical',
    ),
    html.Div(id='output')
])


@app.callback(Output('output', 'children'), [Input('input', 'columns')])
def display_output(value):
    return 'You have entered {}'.format(value)


if __name__ == '__main__':
     app.run_server(debug=True)
