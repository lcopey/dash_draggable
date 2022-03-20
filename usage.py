import dash_draggable
import dash
from dash.dependencies import Input, Output
import dash_html_components as html

app = dash.Dash(__name__)

app.layout = html.Div([
    dash_draggable.DashDraggable(
        id='input',
        tasks={
            'task-1': {'id': 'task-1', 'content': 'Take out the garbage'},
            'task-2': {'id': 'task-2', 'content': 'Watch my favorite show'},
            'task-3': {'id': 'task-3', 'content': 'Charge my phone'},
        },
        columns={
            'column-1': {
                'id': 'column-1',
                'title': 'Done',
                'taskIds': ['task-1', 'task-2',]
            },
            'column-2': {
                'id': 'column-2',
                'title': 'Todo',
                'taskIds': ['task-3',]
            }
        },
    columnOrder=['column-1', 'column-2'],
    ),
    html.Div(id='output')
])


@app.callback(Output('output', 'children'), [Input('input', 'columns')])
def display_output(value):
    return 'You have entered {}'.format(value)


if __name__ == '__main__':
    app.run_server(debug=True)
