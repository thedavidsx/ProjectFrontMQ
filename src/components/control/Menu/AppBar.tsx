import React               from 'react'
import MAppBar             from '@material-ui/core/AppBar'
import {withStyles, Theme} from '@material-ui/core/styles'
import { PropTypes }       from '@material-ui/core'
import MToolbar            from '@material-ui/core/Toolbar'

export interface AppBarProps {
    id?       : string
    classes?  : any
    component?: any
    elevation?: number
    square?   : boolean
    color?    : PropTypes.Color;
    position? : 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative'
}

export interface AppBarState {
}

class AppBar extends React.Component<AppBarProps,AppBarState> {
  constructor(props: AppBarProps) {
    super(props);

    this.state = {
    }
  }

render() {
    const {id,classes,children,...rest}  = this.props
    return (
        <MAppBar id={id} className={classes.root} {...rest}>
            <MToolbar variant={"dense"}>
                {children}
            </MToolbar>
        </MAppBar>
    );
  }
}

const styles = (theme: Theme) => ({
    appBar: {top: 'auto',bottom: 0},
    root  : {width: '100%' }
  });
export default withStyles(styles) (AppBar)