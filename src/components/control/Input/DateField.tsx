import React      from 'react'
import MTextField from '@material-ui/core/TextField'
import {withStyles, Theme} from '@material-ui/core/styles'


interface DateFieldProps {
    autoComplete?: string
    autoFocus?: boolean
    children?: React.ReactNode
    defaultValue?: string | number
    disabled?: boolean
    error?: boolean
    FormHelperTextProps?: any
    fullWidth?: boolean
    helperText?: React.ReactNode
    id?: string
    inputRef?: React.Ref<any> | React.RefObject<any>
    label?: React.ReactNode
    margin?: 'none' | 'dense' | 'normal'
    multiline?: boolean
    name?: string
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    placeholder?: string
    required?: boolean
    rows?: string | number
    rowsMax?: string | number
    select?: boolean
    SelectProps?: any
    className?:string
    value?: Array<string | number | boolean> | string | number | boolean
    InputProps? : any
    onBlur?: React.EventHandler<any>
    onFocus?: React.EventHandler<any>
}


interface DateFieldState {
}

class DateField extends React.Component<DateFieldProps, DateFieldState> {
  constructor(props: DateFieldProps) {
    super(props);

    this.state = {
    }
  }

  render() {
    const {name,children,...rest}= this.props
    return (
        <MTextField name={name} type="date"  InputLabelProps ={{ shrink: true}} {...rest}>
        {children}
      </MTextField>
    );
  }
}

const styles = (theme: Theme )=> ({
});

export default withStyles(styles) (DateField)