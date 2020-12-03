import React                  from 'react'
import { withStyles, Theme }  from '@material-ui/core'
import MFormControl           from '@material-ui/core/FormControl'

export interface FormControlProps {
    children  : any
    classes   : any
    component : any
    disabled  : boolean 
    error     : boolean
    fullwidth : boolean
    margin    : "none" | "dense" | "normal"

}

export interface FormControlState {
}

class FormControl extends React.Component<FormControlProps, FormControlState> {
  render() {
      const {children,classes,component,disabled,error,fullwidth,margin}:FormControlProps=this.props
    return (
      disabled?<MFormControl classes={classes.root} component={component} error={error} fullWidth={fullwidth} margin={margin} disabled>{children}</MFormControl>
              :<MFormControl classes={classes.root} component={component} error={error} fullWidth={fullwidth} margin={margin}>{children}</MFormControl>
    );
  }
}


const styles = (theme :Theme ) => ({
    root: { width: '100%' }
})
export default withStyles(styles) (FormControl)