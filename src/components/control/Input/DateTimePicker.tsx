import React                 from 'react'
import { withStyles, Theme } from '@material-ui/core/styles'
import MTextField            from '@material-ui/core/TextField'

export interface DateTimePickerProps {
    id            : string
    label?        : string
    defaultvalue? : any
    classes?      : any
}

export interface DateTimePickerState {
}

class DateTimePicker extends React.Component<DateTimePickerProps, DateTimePickerState> {
  render() {
    const {id,label,defaultvalue,classes} :DateTimePickerProps=this.props
    return (
        <form className={classes.container} noValidate>       
            <MTextField id={id} label={label} type="datetime-local" defaultValue={defaultvalue} className={classes.textField} InputLabelProps={{shrink: true}}/>
        </form>
    );
  }
}


const styles = (theme: Theme) => ({
  textField : {marginLeft: theme.spacing.unit,marginRight: theme.spacing.unit,width: 200 }
});
export default withStyles(styles) (DateTimePicker)