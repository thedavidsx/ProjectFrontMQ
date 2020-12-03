import React    from 'react'
import MPopper  from '@material-ui/core/Popper'
import {withStyles, Theme} from '@material-ui/core/styles'

export interface PopperProps {
    transition?    : boolean
    anchorEl?      : any
    children       : any
    keepMounted?   : boolean
    modifiers?     : object
    open           : boolean
    placement?     : 'bottom-end' | 'bottom-start' | 'bottom' | 'left-end' | 'left-start' | 'left' | 'right-end' | 'right-start' | 'right' | 'top-end' | 'top-start' | 'top'
    popperOptions? : object;
}

export interface PopperState {
}

class Popper extends React.Component<PopperProps,PopperState> {
  constructor(props: PopperProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    const {open,children,...rest}=this.props
    return (
      <MPopper open={open} {...rest}>
        {children}
      </MPopper>
    );
  }
}


const styles = (theme: Theme) => ({   
});
export default withStyles(styles) (Popper)