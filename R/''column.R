# AUTO GENERATED FILE - DO NOT EDIT

#' @export
''column <- function(column=NULL, handleText=NULL, items=NULL, showHandle=NULL) {
    
    props <- list(column=column, handleText=handleText, items=items, showHandle=showHandle)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'column',
        namespace = 'dash_draggable',
        propNames = c('column', 'handleText', 'items', 'showHandle'),
        package = 'dashDraggable'
        )

    structure(component, class = c('dash_component', 'list'))
}
