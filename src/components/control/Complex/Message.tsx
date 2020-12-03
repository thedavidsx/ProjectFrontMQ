import React               from 'react'
import {withStyles, Theme} from '@material-ui/core/styles'

export interface MessageProps {
}

export interface MessageState {
}

class Message extends React.Component<MessageProps, MessageState> {
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

const styles = (theme: Theme) => ({  
});
export default withStyles(styles) (Message)