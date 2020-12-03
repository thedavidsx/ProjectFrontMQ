import React          from 'react'
import { withStyles, Theme } from '@material-ui/core/styles'
import MList          from '@material-ui/core/List'
import MListItem      from '@material-ui/core/ListItem'
import MListItemIcon  from '@material-ui/core/ListItemIcon'
import MListItemText  from '@material-ui/core/ListItemText'


interface ListBoxProps {
    id?             : string
    children?       : any
    classes?        : any
    component?      : any
    dense?          : boolean
    disablepadding? : boolean
    subheader?      : object
    items?          : any
    secondary?      : boolean
}

interface ListBoxState {
}

class ListBox extends React.Component<ListBoxProps, ListBoxState> {

  render() {
    const {component,classes,items,secondary}:ListBoxProps = this.props
    return (
        <MList component={component} className={classes.list}>
            {items.map((xx : any , i : number) => <MListItem button key={i}><MListItemText primary={xx.primary} secondary={secondary ? xx.secondary : null} /></MListItem>)}
        </MList>
    );
  }
}

const styles = (theme : Theme) => ({
    root: {width: '100%',maxWidth: 360,backgroundColor: theme.palette.background.paper},
    list: {width: 250}
})
export default withStyles(styles) (ListBox)