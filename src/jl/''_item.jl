# AUTO GENERATED FILE - DO NOT EDIT

export ''_item

"""
    ''_item(;kwargs...)

An item component.

Keyword arguments:
- `handleText` (String; optional)
- `index` (Real; optional)
- `item` (Dict; optional): The ID used to identify this component in Dash callbacks.
- `showHandle` (Bool; optional)
"""
function ''_item(; kwargs...)
        available_props = Symbol[:handleText, :index, :item, :showHandle]
        wild_props = Symbol[]
        return Component("''_item", "item", "dash_draggable", available_props, wild_props; kwargs...)
end

