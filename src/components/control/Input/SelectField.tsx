import React               from 'react'
import {withStyles, Theme} from '@material-ui/core/styles'
import MSelect             from 'react-select'
import { AnyKindOfDictionary } from 'lodash';

interface SelectFieldProps {
    disabled?: boolean
    error?: boolean
    FormHelperTextProps?: any
    fullWidth?: boolean
    id?: string
    label?:  string
    margin?: 'none' | 'dense' | 'normal'
    name?: string
    onChange?: any
    placeholder?: string
    required?: boolean
    className?:string
    value?: Array<string | number | boolean> | string | number | boolean
    onBlur?: React.EventHandler<any>
    onFocus?: React.EventHandler<any>
    classes?: any
    dataSource :Array<{key:any,label:string}>
    styles?: any
    theme?: any
}

interface SelectFieldState {  
  name : AnyKindOfDictionary
}





class SelectField extends React.Component<SelectFieldProps, SelectFieldState> {
  
  constructor(props: SelectFieldProps) {
    super(props);

    this.state = { 
      name : ""
    }
    
  }

  handleChange = () => (event:any | HTMLInputElement)=> { 
    let names = event.target.name
    this.setState({...this.state,[names] : event.value ? undefined : event.target.value},this.props.onChange)
  };
  
  render() {
    const {dataSource,label,classes,theme,onChange,name,...rest}= this.props
    const selectStyles = {input: (base: any )=> ({ ...base, color: theme.palette.text.primary,'& input': { font: 'inherit'}})}

    return (
        <MSelect 
          name = {name}
          styles={selectStyles} 
          placeholder={label} 
          className={classes.paper} 
          isSearchable={true} 
          options={dataSource} 
          onChange={this.handleChange}/>
    );
  }
}
const styles = (theme: Theme )=> ({
    //root:{padding:'10px 1px 1px 1px' , 'border-width': '0px'}
    root : {flexGrow: 1,height: 250,padding:'10px 1px 1px 1px' },
    paper: {zIndex: 1, marginTop: theme.spacing.unit,left: 0,right: 0 }//position : 'absolute',

});


export default withStyles(styles, { withTheme: true }) (SelectField)
/*
<MTypography>{label}</MTypography>
 <MTextField select name={name}  {...rest} SelectProps={{MenuProps: {className:classes.menu}}} >
          {dataSource.map(x => (
            <MMenuItem key={x.key} value={x.key}>
              {x.value}
            </MMenuItem>
          ))}
        </MTextField>
        */