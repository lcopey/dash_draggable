# AUTO GENERATED FILE - DO NOT EDIT

export ''_dashdraggable

"""
    ''_dashdraggable(;kwargs...)

A DashDraggable component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `columnOrder` (Array; optional)
- `columnTitles` (Array; optional)
- `columns` (Dict; optional)
- `tasks` (Dict; optional)
"""
function ''_dashdraggable(; kwargs...)
        available_props = Symbol[:id, :columnOrder, :columnTitles, :columns, :tasks]
        wild_props = Symbol[]
        return Component("''_dashdraggable", "DashDraggable", "dash_draggable", available_props, wild_props; kwargs...)
end

