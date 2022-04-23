# AUTO GENERATED FILE - DO NOT EDIT

#' @export
''DashDraggable <- function(id=NULL, className=NULL, columnOrder=NULL, columns=NULL, droppableDirection=NULL, handleText=NULL, items=NULL, showHandle=NULL) {
    
    props <- list(id=id, className=className, columnOrder=columnOrder, columns=columns, droppableDirection=droppableDirection, handleText=handleText, items=items, showHandle=showHandle)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashDraggable',
        namespace = 'dash_draggable',
        propNames = c('id', 'className', 'columnOrder', 'columns', 'droppableDirection', 'handleText', 'items', 'showHandle'),
        package = 'dashDraggable'
        )

    structure(component, class = c('dash_component', 'list'))
}
