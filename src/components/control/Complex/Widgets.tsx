import React               from 'react'
import {withStyles, Theme} from '@material-ui/core/styles'

export interface WidgetsProps {
}

export interface WidgetsState {
}

class Widgets extends React.Component<WidgetsProps, WidgetsState> {
  render() {
    return (
      <div>
        
      </div>
    );
  }
}
const styles = (theme: Theme) => ({  
});
export default withStyles(styles) (Widgets)