import React               from 'react'
import MButton             from '@material-ui/core/Button'
import {withStyles, Theme} from '@material-ui/core/styles'
import { PropTypes }       from '@material-ui/core'

export interface ButtonProps {
    id?                 : string   
    classes?            : any 
    children?           : any
    onClick?            : any
    color?              : PropTypes.Color
    variant?            : 'text' | 'outlined' | 'contained' 
    component?          : any
    disabled?           : boolean
    disableFocusRipple? : boolean
    disableRipple?      : boolean    
    fullWidth?          : boolean
    href?               : string
    mini?               : boolean
    size?               : 'small' | 'medium' | 'large'
    type?               : 'submit' | 'reset' | 'button'
}


export interface ButtonState {
}

class Button extends React.Component<ButtonProps,ButtonState> {
  constructor(props: ButtonProps) {
    super(props);

    this.state = {
    }
  }

  render() {
    const {id,classes,children,...rest}  = this.props
    return (
      <MButton id={id} className={classes.button} {...rest}>{children}</MButton>
    );
  }
}
const styles = (theme: Theme) => ({
    button: {margin : theme.spacing.unit}
  });
export default withStyles(styles) (Button)