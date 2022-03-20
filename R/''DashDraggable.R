# AUTO GENERATED FILE - DO NOT EDIT

#' @export
''DashDraggable <- function(id=NULL, columnOrder=NULL, columns=NULL, handleText=NULL, items=NULL, showHandle=NULL) {
    
    props <- list(id=id, columnOrder=columnOrder, columns=columns, handleText=handleText, items=items, showHandle=showHandle)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashDraggable',
        namespace = 'dash_draggable',
        propNames = c('id', 'columnOrder', 'columns', 'handleText', 'items', 'showHandle'),
        package = 'dashDraggable'
        )

    structure(component, class = c('dash_component', 'list'))
}
