import React      from 'react'
import MTextField from '@material-ui/core/TextField'
import {withStyles, Theme} from '@material-ui/core/styles'
import { AnyPtrRecord } from 'dns';

export interface TextFieldProps {
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
    InputLabelProps?: any
    inputRef?: React.Ref<any> | React.RefObject<any>
    label?: React.ReactNode
    margin?: 'none' | 'dense' | 'normal'
    multiline?: boolean
    name?: string
    onChange?: any
    placeholder?: string
    required?: boolean
    rows?: string | number
    rowsMax?: string | number
    select?: boolean
    SelectProps?: any
    type?: string
    className?:string
    value?: Array<string | number | boolean> | string | number | boolean
    InputProps? : any
    onBlur?: any
    onFocus?: any
    classes?: any
}

export interface TextFieldState {
}
class TextField extends React.Component<TextFieldProps,TextFieldState> {
  constructor(props: TextFieldProps) {
    super(props);

    this.state = {
    }
  }

  render() {
      const {name,classes,children,className,onChange,onBlur,onFocus,...rest}= this.props
    return (
      <MTextField name={name} onChange = {onChange} {...rest}>
        {children}
      </MTextField>
    );
  }
}
const styles = (theme: Theme )=> ({
});

export default withStyles(styles) (TextField)