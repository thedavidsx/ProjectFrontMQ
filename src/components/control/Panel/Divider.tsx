import React from 'react'
import MDivider from '@material-ui/core/Divider'
import { Theme,withStyles } from '@material-ui/core';

export interface DividerProps {
  absolute? : boolean
  classes?  : any
  light     : boolean
  variant?  : "fullWidth" | "inset" | "middle"
}

export interface DividerState {
}

class Divider extends React.Component<DividerProps, DividerState> {
  constructor(props: DividerProps) {
    super(props);

    this.state = {
    }
  }

  render() {
    const {absolute,classes, light, variant}:DividerProps=this.props
    return (
      <MDivider absolute={absolute}classes={classes} light={light} variant={variant}/>
    );
  }
}

const styles = (theme: Theme) => ({
  root: { width: '100%',maxWidth: 360,backgroundColor: theme.palette.background.paper }
});

export default withStyles(styles) (Divider)