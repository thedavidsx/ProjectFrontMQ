import React      from 'react'
import MTextField from '@material-ui/core/TextField'
import {withStyles, Theme} from '@material-ui/core/styles'

interface NumberFieldProps {
    autoComplete?: string
    autoFocus?: boolean
    defaultValue?: string | number
    disabled?: boolean
    error?: boolean
    FormHelperTextProps?: any
    fullWidth?: boolean
    helperText?: React.ReactNode
    id?: string
    InputLabelProps?: any
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

interface NumberFieldState {
}

class NumberField extends React.Component<NumberFieldProps, NumberFieldState> {
  constructor(props: NumberFieldProps) {
    super(props);

    this.state = {
    }
  }

  render() {
    const {name,children,...rest}= this.props
    return (
        <MTextField type={"number"} name={name}  {...rest}/>
    );
  }
}

const styles = (theme: Theme )=> ({
});

export default withStyles(styles) (NumberField)