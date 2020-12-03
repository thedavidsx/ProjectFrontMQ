import * as React             from 'react'
import { withStyles , Theme } from '@material-ui/core/styles'
import MCircularProgress      from '@material-ui/core/CircularProgress'

export interface ProgressCircularProps {
    classes? : any
    color?   : "primary" | "secondary" | "inherit"
    variant? : "determinate" | "indeterminate" | "static"
    value?   : number

}

export interface ProgressCircularState {
}

class ProgressCircular extends React.Component<ProgressCircularProps, ProgressCircularState> {
  
  render() {
    const {classes,color,variant,value}:ProgressCircularProps = this.props
    return (
        <MCircularProgress color={color} variant={variant} value={value} className={classes.progress} />
    );
  }
}

const styles = (theme: Theme) => ({
    progress: {margin: theme.spacing.unit * 2 }
});

export default withStyles(styles) (ProgressCircular)
