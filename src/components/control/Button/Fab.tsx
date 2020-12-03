import React               from 'react'
import MFab                from '@material-ui/core/Fab'
import {withStyles, Theme} from '@material-ui/core/styles'
import { PropTypes }       from '@material-ui/core'


export interface FabProps {
    id                  : string
    classes?             : any
    color?              : PropTypes.Color
    component?          : any
    disabled?           : boolean
    disableFocusRipple? : boolean
    disableRipple?      : boolean
    href?               : string
    size?               : 'small' | 'medium' | 'large'
    type?               : 'submit' | 'reset' | 'button'
    variant?            : 'round' | 'extended'
}

export interface FabState {
}

class Fab extends React.Component<FabProps,FabState> {
  constructor(props: FabProps) {
    super(props);

    this.state = {
    }
  }

  render() {
    const {id,classes,children,...rest}  = this.props
    return (
      <MFab id={id} className={classes.Fab} {...rest}>{children}</MFab>
    );
  }
}

const styles = (theme: Theme) => ({
    Fab          : {margin : theme.spacing.unit},
    extendedIcon : {marginRight: theme.spacing.unit}
  });
export default withStyles(styles) (Fab)