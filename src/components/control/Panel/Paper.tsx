import React from 'react'
import MPaper from '@material-ui/core/Paper'
import { Theme, withStyles } from '@material-ui/core'

export interface PaperProps {
    children? : any
    classes?  : any
    elevation?: number
    square?   : boolean
    component?: any
}

export interface PaperState {
}

class Paper extends React.Component<PaperProps, PaperState> {
  public render() {
    const {children,classes,elevation,square,component}:PaperProps = this.props
    return (
      <MPaper classes={classes} elevation={elevation} square={square} component={component}>{children}</MPaper>
    );
  }
}

const styles = (theme: Theme) => ({
    root: {...theme.mixins.gutters(),paddingTop: theme.spacing.unit * 2,paddingBottom: theme.spacing.unit * 2}
});

export default withStyles(styles) (Paper)