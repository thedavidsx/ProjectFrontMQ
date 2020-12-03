import * as React from 'react';
import MDrawer    from '@material-ui/core/Drawer'
import { withStyles, Theme }   from '@material-ui/core/styles'

interface DrawerProps {
    anchor?      : "left" | "top" | "right" | "bottom"
    children?    : any
    classes?     : object
    elevation?   : number
    modalprops?  : object
    onclose?     : any
    open?        : boolean
    paperprops?  : object
    slideprops?  : object
    transitionduration? : object
    variant?     : "permanent" | "persistent" | "temporary"
}

interface DrawerState {
}

export class Drawer extends React.Component<DrawerProps, DrawerState> {

  render() {
    const {open,anchor,children,onclose} = this.props
    console.log(open) 
    return (
      <MDrawer anchor={anchor} open={open} onClose={onclose}>
        <div
          tabIndex  = {0}
          role      = "button"
          onClick   = {onclose}
          onKeyDown = {onclose}
        >
          {children}
        </div>
      </MDrawer>
    );
  }
}


const styles = (theme: Theme) => ({
  list     : {width: 250},
  fullList : {width: 'auto'}
});


export default withStyles(styles) (Drawer)