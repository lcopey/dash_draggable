# AUTO GENERATED FILE - DO NOT EDIT

#' @export
''DashDraggable <- function(id=NULL, columnOrder=NULL, columns=NULL, items=NULL) {
    
    props <- list(id=id, columnOrder=columnOrder, columns=columns, items=items)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashDraggable',
        namespace = 'dash_draggable',
        propNames = c('id', 'columnOrder', 'columns', 'items'),
        package = 'dashDraggable'
        )

    structure(component, class = c('dash_component', 'list'))
}
