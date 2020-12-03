import React               from 'react'
import MPaper              from '@material-ui/core/Paper'
import {withStyles, Theme} from '@material-ui/core/styles'
import GridContainer       from '../Grid/GridContainer'

export interface PanelProps {
    children:any
    classes?: any
}

export interface PanelState {
}

class Panel extends React.Component<PanelProps,PanelState> {
  constructor(props: PanelProps) {
    super(props);

    this.state = {
    }
  }

  render() {
      const {children,classes}=this.props
    return (
      <MPaper elevation={6} className={classes.root}>
        <GridContainer spacing={8}>
            {children}
        </GridContainer>        
      </MPaper>
    );
  }
}


const styles = (theme: Theme )=> ({
    root:{width:'100%', padding:'15px 32px 20px 32px'}

});

export default withStyles(styles) (Panel)