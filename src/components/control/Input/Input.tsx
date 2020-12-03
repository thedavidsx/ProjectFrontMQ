import * as React     from 'react'
import { withStyles, Theme } from '@material-ui/core/styles'
import MInput         from '@material-ui/core/Input'


export interface InputProps {
    id            : string
    defaultvalue? : string
    classes?      : any
    placeholder?  : string
    disabled?     : boolean
    type?         : string
    onchange?     : any
    margin?       : "none" | "dense" | "normal"


    //label         : any
    //variant?      : GLB.TextField.Variant
    //helpertext?   : string    
}

export interface InputState {
}

class Input extends React.Component<InputProps, InputState> {

  render() {
    const {id ,  classes,  onchange, margin, defaultvalue, type, placeholder, disabled }:InputProps = this.props
    return (
        <React.Fragment>
        {disabled?<MInput id={id} type={type} placeholder={placeholder} className={classes.input} defaultValue={defaultvalue}  onChange={onchange} disabled/>
                 :<MInput id={id} type={type} placeholder={placeholder} className={classes.input} defaultValue={defaultvalue}  onChange={onchange}/>       
        }
      </React.Fragment>
    );
  }
}
const styles = (theme: Theme )=> ({
    input     : { margin: theme.spacing.unit }
  });
  
  export default withStyles(styles) (Input)
  