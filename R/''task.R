# AUTO GENERATED FILE - DO NOT EDIT

#' @export
''task <- function(index=NULL, task=NULL) {
    
    props <- list(index=index, task=task)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'task',
        namespace = 'dash_draggable',
        propNames = c('index', 'task'),
        package = 'dashDraggable'
        )

    structure(component, class = c('dash_component', 'list'))
}
