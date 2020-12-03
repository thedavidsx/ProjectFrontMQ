import React               from 'react'
import {withStyles, Theme} from '@material-ui/core/styles'

export interface TreeProps {
}

export interface TreeState {
}

class Tree extends React.Component<TreeProps, TreeState> {
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

const styles = (theme: Theme) => ({  
});
export default withStyles(styles) (Tree)