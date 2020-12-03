import React   from 'react'
import MSelect from '@material-ui/core/Select'
import { withStyles , Theme } from '@material-ui/core/styles'


export interface SelectProps {
    children      : any
    classes       : any
    displayempty  : boolean
    iconcomponent : any
    multiple      : boolean
    onchange      : any
    onclose       : any
    onopen        : any
    value         : any
    variant       : "standard" | "outlined" | "filled"

}

export interface SelectState {
}

class Select extends React.Component<SelectProps, SelectState> {
  render() {
      const {children,classes,displayempty,iconcomponent,multiple,onchange,onclose,onopen,value,variant} :SelectProps = this.props
    return (
      <MSelect classes={classes} displayEmpty={displayempty} IconComponent={iconcomponent} multiple={multiple} onChange={onchange} onClose={onclose} onOpen={onopen} value={value} variant={variant}>{children}</MSelect>
    );
  }
}


const styles = (theme: Theme) => ({
    root   : {}
});

export default withStyles(styles) (Select)
