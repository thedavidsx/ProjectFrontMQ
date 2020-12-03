import React                  from 'react'
import MRadio                 from '@material-ui/core/Radio'
import { withStyles , Theme } from '@material-ui/core/styles'

export interface RadioProps {
    id        : string
    checked?  : boolean
    onchange? : any
    value?    : any
    color?    : "primary" | "secondary" | "default"
    name?     : string
    icon?     : any
    classes?  : any
    checkedicon? : any
    disabled?    : boolean
}

export interface RadioState {
}

class Radio extends React.Component<RadioProps, RadioState> {
  render() {
    const {id, checked, onchange, value, color, name, icon, classes, checkedicon, disabled} :RadioProps= this.props
    return (
        disabled?<MRadio id={id}  checked={checked} onChange={onchange} value={value} color={color} name={name} icon={icon} classes={{root:classes.root, checked:classes.checked}} checkedIcon={checkedicon} disabled/>
                :<MRadio id={id}  checked={checked} onChange={onchange} value={value} color={color} name={name} icon={icon} classes={{root:classes.root, checked:classes.checked}}  checkedIcon={checkedicon}/>
    );
  }
}

const styles = (theme: Theme) => ({
    root   : {},
    checked: {}
});

export default withStyles(styles) (Radio)
