import React from 'react'
import MRadioGroup from '@material-ui/core/RadioGroup'
import { withStyles, Theme }  from '@material-ui/core'

export interface RadioGroupProps {
    children     : any
    defaultvalue : any
    name         : string
    onchange     : any
    value        : any
}

export interface RadioGroupState {
}

class RadioGroup extends React.Component<RadioGroupProps, RadioGroupState> {
  render() {
      const {defaultvalue,name,onchange,value,children}:RadioGroupProps=this.props
    return (
      <MRadioGroup defaultValue={defaultvalue} name={name} onChange={onchange} value={value}>{children}</MRadioGroup>
    );
  }
}


const styles = (theme :Theme ) => ({
    root: { width: '100%' }
})
export default withStyles(styles) (RadioGroup)

