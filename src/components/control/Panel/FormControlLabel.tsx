import React             from 'react'
import MFormControlLabel from '@material-ui/core/FormControlLabel'
import { withStyles, Theme }  from '@material-ui/core'


export interface FormControlLabelProps {
    checked?   : boolean
    classes?   : any
    control?   : any
    disabled?  : boolean
    label?     : any
    name?      : string
    onchange?  : any
    value?     : string
    labelplacement? : "end" | "start" | "top" | "bottom"

}

export interface FormControlLabelState {
}

class FormControlLabel extends React.Component<FormControlLabelProps, FormControlLabelState> {
  render() {
      const {checked,classes, control, label,name,onchange,value,labelplacement,disabled}:FormControlLabelProps =this.props
    return (
      disabled?<MFormControlLabel checked={checked} classes={classes.root} control={control} label={label} name={name} onChange={onchange} value={value} labelPlacement={labelplacement} disabled/>
              :<MFormControlLabel checked={checked} classes={classes.root} control={control} label={label} name={name} onChange={onchange} value={value} labelPlacement={labelplacement}/>
    );
  }
}

const styles = (theme :Theme ) => ({
    root: { width: '100%' }
})
export default withStyles(styles) (FormControlLabel)