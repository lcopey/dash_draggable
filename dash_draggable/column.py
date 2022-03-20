# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class column(Component):
    """A column component.


Keyword arguments:

- column (dict; optional)

- tasks (list; optional):
    The ID used to identify this component in Dash callbacks."""
    @_explicitize_args
    def __init__(self, tasks=Component.UNDEFINED, column=Component.UNDEFINED, **kwargs):
        self._prop_names = ['column', 'tasks']
        self._type = 'column'
        self._namespace = 'dash_draggable'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['column', 'tasks']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(column, self).__init__(**args)
