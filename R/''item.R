# AUTO GENERATED FILE - DO NOT EDIT

#' @export
''item <- function(index=NULL, item=NULL, showHandle=NULL) {
    
    props <- list(index=index, item=item, showHandle=showHandle)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'item',
        namespace = 'dash_draggable',
        propNames = c('index', 'item', 'showHandle'),
        package = 'dashDraggable'
        )

    structure(component, class = c('dash_component', 'list'))
}
