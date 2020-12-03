import React                  from 'react'
import { withStyles, Theme }  from '@material-ui/core'
import MFormGroup             from '@material-ui/core/FormGroup'


export interface FormGroupProps {
    children : any
    classes  : any
    row      : boolean
}

export interface FormGroupState {
}

class FormGroup extends React.Component<FormGroupProps, FormGroupState> {
  constructor(props: FormGroupProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
      const {children,classes,row}:FormGroupProps= this.props
    return (
      <MFormGroup classes={classes.root} row={row}>{children}</MFormGroup>
    );
  }
}


const styles = (theme :Theme ) => ({
    root: { width: '100%' }
})
export default withStyles(styles) (FormGroup)