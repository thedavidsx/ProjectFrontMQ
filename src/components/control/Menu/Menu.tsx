import * as React           from 'react'
import { Theme,withStyles } from '@material-ui/core'
import MMenu                from '@material-ui/core/Menu'
import MMenuItem            from '@material-ui/core/MenuItem'
import MMenuList            from '@material-ui/core/MenuList'

export interface MenuProps {
    id          : string
    children    : any
    classes?    : any
    open?       : any
    onclose?    : any
    anchorel?   : any
    
}
export interface MenuItemProps {
    key       : any
    disabled? : boolean
    selected? : boolean
    onclick?  : any
    children  : any
    classes?  : any
}
export interface MenuListProps {
    children : any
    classes  : any
}

export interface MenuState {
}

class Menu extends React.Component<MenuProps, MenuState> {
  
  render() {
    const {id, children, classes, open, onclose, anchorel}:MenuProps=this.props
    return (
      <MMenu id={id} classes={classes.root} open={open} onClose={onclose} anchorEl={anchorel}>{children}</MMenu>
    );
  }
}

export const MenuItem=(props:MenuItemProps)=>{
    const {key,disabled,selected,onclick,children,classes} : MenuItemProps = props  
    return (
        disabled?<MMenuItem key={key} selected={selected} onClick={onclick} classes={classes.menuItem} disabled>{children}</MMenuItem>
                :<MMenuItem key={key} selected={selected} onClick={onclick} classes={classes.menuItem}>{children}</MMenuItem>
    );
}

export const MenuList=(props:MenuListProps)=>{
    const {children,classes} : MenuListProps = props  
    return (
      <MMenuList classes={classes.root}>{children}</MMenuList>
    );
}


const styles = (theme: Theme) => ({
    menuItem: {'&:focus': {backgroundColor: theme.palette.primary.main,'& $primary, & $icon': {color: theme.palette.common.white}}}
});

export default withStyles(styles) (Menu)