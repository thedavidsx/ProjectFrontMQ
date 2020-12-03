import React         from 'react'
import classNames    from 'classnames'
import Select        from 'react-select'
import { withStyles, Theme} from '@material-ui/core/styles'
import Typography    from '@material-ui/core/Typography'
import NoSsr         from '@material-ui/core/NoSsr'
import TextField     from '@material-ui/core/TextField'
import Paper         from '@material-ui/core/Paper'
import Chip          from '@material-ui/core/Chip'
import MenuItem      from '@material-ui/core/MenuItem'
import CancelIcon    from '@material-ui/icons/Cancel'
import { emphasize } from '@material-ui/core/styles/colorManipulator'


export interface SelectFieldAutocompleteProps{
    classes    : any
    theme      : any
    label      : string
    dataSource : Array<{key:string,value:string,label:string}>
}
export interface SelectFieldAutocompleteState{
    
}

const styles = (theme: Theme) => ({
  root             : { flexGrow: 1, height: 8},
  input            : { display: 'flex', padding: 0},
  valueContainer   : { display: 'flex', flexWrap: 'wrap' as 'wrap', flex: 1,alignItems: 'center',overflow: 'hidden'},
  chip             : { margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px` },
  chipFocused      : { backgroundColor: emphasize(theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700], 0.08)},
  noOptionsMessage : { padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px` },
  singleValue      : { fontSize: 16 },
  placeholder      : { position: 'absolute' as 'absolute', left: 2, fontSize: 16 },
  paper            : { position: 'absolute' as 'absolute' , zIndex: 1100, marginTop: theme.spacing.unit, left: 0, right: 0 },
  divider          : { height: theme.spacing.unit * 2 }
                            });

function NoOptionsMessage(props:any) {
  return (
    <Typography color="textSecondary" className={props.selectProps.classes.noOptionsMessage} {...props.innerProps}>
      {props.children}
    </Typography>
  );
}

function inputComponent(props:any) {
  const {inputRef , ...rest }=props
  return <div ref={inputRef} {...rest} />;
}

function Control(props:any) {
  return (
    <TextField fullWidth InputProps={{inputComponent,inputProps: {className: props.selectProps.classes.input,inputRef: props.innerRef,children: props.children,...props.innerProps}}} {...props.selectProps.textFieldProps}/>
  );
}

function Option(props:any) {
  return (
    <MenuItem buttonRef={props.innerRef} selected={props.isFocused} component="div" style={{fontWeight: props.isSelected ? 500 : 400}} {...props.innerProps}>
      {props.children}
    </MenuItem>
  );
}

function Placeholder(props:any) {
  return (
    <Typography color="textSecondary" className={props.selectProps.classes.placeholder} {...props.innerProps}>
      {props.children}
    </Typography>
  );
}

function SingleValue(props:any) {
  return (
    <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
      {props.children}
    </Typography>
  );
}

function ValueContainer(props:any) {
  return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
}

function MultiValue(props:any) {
  return (
    <Chip tabIndex={-1} label={props.children} className={classNames(props.selectProps.classes.chip, {[props.selectProps.classes.chipFocused]: props.isFocused})} onDelete={props.removeProps.onClick} deleteIcon={<CancelIcon {...props.removeProps} />}/>
  );
}

function Menu(props:any) {
  return (
    <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
      {props.children}
    </Paper>
  );
}

const components = {Control,Menu,MultiValue,NoOptionsMessage,Option,Placeholder,SingleValue,ValueContainer};

class SelectFieldAutocomplete extends React.Component<SelectFieldAutocompleteProps,SelectFieldAutocompleteState> {
  state = { single: null,  multi: null};

  handleChange = (name:string) => (value:any) => {
    this.setState({[name]: value});
  };

  render() {
    const { classes, theme ,dataSource, label} = this.props;

    const selectStyles = {
      input: (base:any) => ({...base, color: theme.palette.text.primary,'& input': {font: 'inherit'}})};

    return (
      <div className={classes.root}>
        <NoSsr>
          <Select
            classes={classes}
            styles={selectStyles}
            options={dataSource}
            components={components}
            value={this.state.single}
            onChange={this.handleChange('single')}
            placeholder={label}
            isClearable
            textFieldProps={{label: this.props.label,InputLabelProps: {shrink: true}}}            
          />          
        </NoSsr>
      </div>
    );
  }
}


export default withStyles(styles, { withTheme: true })(SelectFieldAutocomplete);
