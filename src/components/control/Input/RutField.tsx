import React               from 'react'
import MTextField          from '@material-ui/core/TextField'
import {withStyles, Theme} from '@material-ui/core/styles'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon          from '@material-ui/icons/Search'
interface RutFieldProps {
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

interface RutFieldState {
  rut:string
}

class RutField extends React.Component<RutFieldProps, RutFieldState> {
  public readonly state: RutFieldState;

  constructor(props: RutFieldProps) {
    super(props);

    this.state = {
      rut:""
    }
  }
  handleBlur=(e: any)=>{
    let rut:string=this.state.rut
    rut = rut.trim()
    rut = rut.replace("-","").replace(".","").replace(",","")
    if (rut!=""){
      let largo=rut.length
      let rt=rut.substr(0,largo-1)
      let dg=rut.substr(largo-1,1)
      this.setState({rut:rt+"-"+dg})
    }
  }

  handleChange=(e:any)=>{
    this.setState({rut:e.target.value})
  }

  handleKeyPress=(e:any)=>{
    
  }

  handleClick=(e:any)=>{
    alert('click en lupa rut')
  }

  render() {
    const {name,children,...rest}= this.props
    const {rut} = this.state
    return (
          <MTextField type={"text"} name={name} {...rest} value={rut} onChange={this.handleChange} onBlur={this.handleBlur} onKeyDown={this.handleKeyPress}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon onClick={this.handleClick} />
              </InputAdornment>
            ),
          }}
          
          />
    );
  }
}


const styles = (theme: Theme )=> ({
});

export default withStyles(styles) (RutField)