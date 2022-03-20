import dash_draggable
import dash
from dash.dependencies import Input, Output
import dash_html_components as html

app = dash.Dash(__name__)

app.layout = html.Div([
    dash_draggable.DashDraggable(
        id='input',
        items={'task-1': 'Take out the garbage',
               'task-2': 'Watch my favorite show',
               'task-3': 'Charge my phone'},
        columns={'column-1': {'itemIds': ['task-1', 'task-2']},
                 'column-2': {'title': 'To Do', 'itemIds': ['task-3']}
                 },
    columnOrder=['column-2', 'column-1'],
    showHandle=False,
    ),
    html.Div(id='output')
])


@app.callback(Output('output', 'children'), [Input('input', 'columns')])
def display_output(value):
    return 'You have entered {}'.format(value)


if __name__ == '__main__':
    app.run_server(debug=True)
