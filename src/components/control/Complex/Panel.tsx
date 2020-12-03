import React               from 'react'
import {withStyles, Theme} from '@material-ui/core/styles'

export interface PanelProps {
}

export interface PanelState {
}

class Panel extends React.Component<PanelProps, PanelState> {
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

const styles = (theme: Theme) => ({  
});
export default withStyles(styles) (Panel)