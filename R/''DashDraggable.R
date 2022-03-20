# AUTO GENERATED FILE - DO NOT EDIT

#' @export
''DashDraggable <- function(id=NULL, columnOrder=NULL, columnTitles=NULL, columns=NULL, tasks=NULL) {
    
    props <- list(id=id, columnOrder=columnOrder, columnTitles=columnTitles, columns=columns, tasks=tasks)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashDraggable',
        namespace = 'dash_draggable',
        propNames = c('id', 'columnOrder', 'columnTitles', 'columns', 'tasks'),
        package = 'dashDraggable'
        )

    structure(component, class = c('dash_component', 'list'))
}
