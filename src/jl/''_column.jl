# AUTO GENERATED FILE - DO NOT EDIT

export ''_column

"""
    ''_column(;kwargs...)

A column component.

Keyword arguments:
- `column` (Dict; optional)
- `direction` (String; optional)
- `handleText` (String; optional)
- `items` (Array; optional): The ID used to identify this component in Dash callbacks.
- `showHandle` (Bool; optional)
"""
function ''_column(; kwargs...)
        available_props = Symbol[:column, :direction, :handleText, :items, :showHandle]
        wild_props = Symbol[]
        return Component("''_column", "column", "dash_draggable", available_props, wild_props; kwargs...)
end

