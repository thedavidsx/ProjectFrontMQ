import React                  from 'react'
import MLinearProgress        from '@material-ui/core/LinearProgress'
import { withStyles , Theme } from '@material-ui/core/styles'

export interface ProgressLinearProps {
    classes? : any
    color?   : "primary" | "secondary"
    variant? : "determinate" | "indeterminate" | "buffer" | "query"
    value?   : number
}

export interface ProgressLinearState {
}

class ProgressLinear extends React.Component<ProgressLinearProps, ProgressLinearState> {
  render() {
    const {classes, color, variant, value}: ProgressLinearProps = this.props
    return (
        <MLinearProgress classes={classes} variant={variant} color={color} value={value} />
    );
  }
}


const styles = (theme: Theme) => ({
    progress: {margin: theme.spacing.unit * 2 }
});

export default withStyles(styles) (ProgressLinear)
