import React          from 'react'
import { withStyles, Theme } from '@material-ui/core/styles'
import MTextField      from '@material-ui/core/TextField'

export interface DatePickerProps {
    id            : string
    label?        : string
    defaultvalue? : any
    classes?      : any

}

export interface DatePickerState {
}

class DatePicker extends React.Component<DatePickerProps, DatePickerState> {
  render() {
      const {id,label,defaultvalue,classes} :DatePickerProps=this.props
    return (
            <form className={classes.container} noValidate>       
                <MTextField id={id} label={label} type="date" defaultValue={defaultvalue} className={classes.textField} InputLabelProps={{shrink: true}}/>
            </form>
    );
  }
}
const styles = (theme: Theme ) => ({
  textField : {marginLeft: theme.spacing.unit,marginRight: theme.spacing.unit,width: 200 }
});
export default withStyles(styles) (DatePicker)