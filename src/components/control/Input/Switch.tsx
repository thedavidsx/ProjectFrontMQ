import React                  from 'react'
import MSwitch                from '@material-ui/core/Switch'
import { withStyles , Theme } from '@material-ui/core/styles'

export interface SwitchProps {
    id        : string
    checked?  : boolean
    onchange? : any
    value?    : any
    color?    : "primary" | "secondary" | "default"
    disabled? : boolean
    classes?  : any
    icon?     : any
    checkedicon? : any

}

export interface SwitchState {
}

class Switch extends React.Component<SwitchProps, SwitchState> {
  render() {
      const {id,checked,onchange,value,color,disabled,classes,icon,checkedicon}: SwitchProps = this.props
    return (
      disabled?<MSwitch id={id} checked={checked} onChange={onchange} value={value} color={color} classes={classes.root} icon={icon} checkedIcon={checkedicon} disabled/>
              :<MSwitch id={id} checked={checked} onChange={onchange} value={value} color={color} classes={classes.root} icon={icon} checkedIcon={checkedicon}/>
    );
  }
}


const styles = (theme: Theme) => ({
    root   : {},
    checked: {}
});

export default withStyles(styles) (Switch)