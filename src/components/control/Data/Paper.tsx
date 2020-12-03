import React               from 'react'
import {withStyles, Theme} from '@material-ui/core/styles'
import MPaper              from '@material-ui/core/Paper'

export interface PaperProps {
    children? : any
    classes?  : any
    elevation?: number
    className?: any
}


export interface PaperState {
}

class Paper extends React.Component<PaperProps,PaperState> {
  constructor(props: PaperProps) {
    super(props);

    this.state = {
    }
  }

  render() {
    const {children,classes,...rest}= this.props
    return (
      <MPaper className={classes.root} {...rest}>
        {children}
      </MPaper>
    );
  }
}

const styles = (theme: Theme) => ({
    root: {...theme.mixins.gutters(),paddingTop: theme.spacing.unit * 2,paddingBottom: theme.spacing.unit * 2}
})
  
export default withStyles(styles) (Paper)
