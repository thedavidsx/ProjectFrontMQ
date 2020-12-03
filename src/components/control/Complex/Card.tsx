import React               from 'react'
import {withStyles, Theme} from '@material-ui/core/styles'

export interface CardProps {
}

export interface CardState {
}

class Card extends React.Component<CardProps, CardState> {
 render() {
    return (
      <div>
        
      </div>
    );
  }
}

const styles = (theme: Theme) => ({  
});
export default withStyles(styles) (Card)