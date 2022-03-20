# AUTO GENERATED FILE - DO NOT EDIT

#' @export
''column <- function(column=NULL, items=NULL, showHandle=NULL) {
    
    props <- list(column=column, items=items, showHandle=showHandle)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'column',
        namespace = 'dash_draggable',
        propNames = c('column', 'items', 'showHandle'),
        package = 'dashDraggable'
        )

    structure(component, class = c('dash_component', 'list'))
}
