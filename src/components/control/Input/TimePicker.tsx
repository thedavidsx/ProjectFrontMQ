import React                 from 'react'
import { withStyles, Theme } from '@material-ui/core/styles'
import MTextField            from '@material-ui/core/TextField'

export interface TimePickerProps {
    id            : string
    label?        : string
    defaultvalue? : any
    classes?      : any    
}

export interface TimePickerState {
}

class TimePicker extends React.Component<TimePickerProps, TimePickerState> {
  public render() {
    const {id,label,defaultvalue,classes} :TimePickerProps=this.props
    return (
        <form className={classes.container} noValidate>
            <MTextField id={id} label={label} type="time" defaultValue={defaultvalue} className={classes.textField} InputLabelProps={{ shrink: true }} inputProps={{step: 300}}/>
        </form>
    );
  }
}


const styles = (theme: Theme) => ({
  textField : {marginLeft: theme.spacing.unit,marginRight: theme.spacing.unit,width: 200 }
});
export default withStyles(styles) (TimePicker)