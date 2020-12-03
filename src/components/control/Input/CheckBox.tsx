import React                  from 'react'
import MCheckBox              from '@material-ui/core/Checkbox'
import { withStyles , Theme } from '@material-ui/core/styles'

export interface CheckBoxProps {
    id          : string
    checked?     : boolean
    onchange?    : any
    value?       : string
    color?       : "primary" | "secondary" | "default"
    disabled?    : boolean
    classes?     : any
    checkedicon? : any
    icon?        : any
    indeterminate?     : boolean
    indeterminateicon? : any
}

export interface CheckBoxState {
}

class CheckBox extends React.Component<CheckBoxProps, CheckBoxState> {
  render() {
      const {id,checked,onchange,value,color,classes,checkedicon,icon,indeterminate,indeterminateicon}:CheckBoxProps=this.props
    return (
      <MCheckBox id={id} checked={checked} onChange={onchange} value={value} color={color} classes={classes.root} checkedIcon={checkedicon} icon={icon} indeterminate={indeterminate} indeterminateIcon={indeterminateicon}/>
    );
  }
}


const styles = (theme: Theme) => ({
    root   : {},
    checked: {}
});

export default withStyles(styles) (CheckBox)

