# AUTO GENERATED FILE - DO NOT EDIT

#' @export
''task <- function(index=NULL, item=NULL) {
    
    props <- list(index=index, item=item)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'task',
        namespace = 'dash_draggable',
        propNames = c('index', 'item'),
        package = 'dashDraggable'
        )

    structure(component, class = c('dash_component', 'list'))
}
