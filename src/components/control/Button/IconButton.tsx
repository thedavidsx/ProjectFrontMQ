import React      from 'react'
import MIconButton from '@material-ui/core/IconButton'
import {withStyles, Theme} from '@material-ui/core/styles'
import { PropTypes }       from '@material-ui/core'

export interface IconButtonProps {
    id?            : string
    classes?       : any
    color?         : PropTypes.Color
    disabled?      : boolean
    disableRipple? : boolean
    onClick?       : any
}

export interface IconButtonState {
}

class IconButton extends React.Component<IconButtonProps,IconButtonState> {
  constructor(props: IconButtonProps) {
    super(props);

    this.state = {
    }
  }

  render() {
    const {id,classes,children,...rest}  = this.props
    return (
      <MIconButton id={id} className={classes.buton} {...rest}>{children}</MIconButton>
    );
  }
}

const styles = (theme: Theme) => ({
    button   : {margin : theme.spacing.unit}
});  
export default withStyles(styles)(IconButton)