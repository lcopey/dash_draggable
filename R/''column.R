# AUTO GENERATED FILE - DO NOT EDIT

#' @export
''column <- function(column=NULL, tasks=NULL) {
    
    props <- list(column=column, tasks=tasks)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'column',
        namespace = 'dash_draggable',
        propNames = c('column', 'tasks'),
        package = 'dashDraggable'
        )

    structure(component, class = c('dash_component', 'list'))
}
