import React               from 'react'
import {withStyles, Theme} from '@material-ui/core/styles'

export interface AlertProps {
}

export interface AlertState {
}

class Alert extends React.Component<AlertProps, AlertState> {
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

const styles = (theme: Theme) => ({  
});
export default withStyles(styles) (Alert)