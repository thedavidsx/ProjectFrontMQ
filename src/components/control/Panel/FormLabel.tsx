import React                  from 'react'
import { withStyles, Theme }  from '@material-ui/core'
import MFormLabel from '@material-ui/core/FormLabel'


export interface FormLabelProps {
    children?  : any
    classes?   : any
    component? : any
    disabled?  : boolean
    error?     : boolean
    filled?    : boolean
    focused?   : boolean
    required?  : boolean
}

export interface FormLabelState {
}

class FormLabel extends React.Component<FormLabelProps, FormLabelState> {
  render() {
      const {children,classes,component,disabled,error,filled,focused,required}:FormLabelProps = this.props
    return (
        disabled?<MFormLabel classes={classes.root} component={component} error={error} filled={filled} focused={focused} required={required} disabled>{children}</MFormLabel>
                :<MFormLabel classes={classes.root} component={component} error={error} filled={filled} focused={focused} required={required}>{children}</MFormLabel>
    );
  }
}


const styles = (theme :Theme ) => ({
    root: { width: '100%' }
})
export default withStyles(styles) (FormLabel)