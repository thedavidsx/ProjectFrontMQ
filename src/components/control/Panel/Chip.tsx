import React from 'react'
import MChip from '@material-ui/core/Chip'
import { Theme, withStyles } from '@material-ui/core';

export interface ChipProps {
    id          : string
    label?      : any
    classes?    : any
    avatar?     : any
    onclick?    : any
    ondelete?   : any
    icon?       : any
    deleteicon? : any
    clickable   : boolean
    color?      : "default" | "primary" | "secondary"
    variant?    : "default" | "outlined"
}

export interface ChipState {
}

class Chip extends React.Component<ChipProps, ChipState> {
  render() {
      const {id,label,classes,avatar,icon,color,variant,onclick,ondelete,clickable}:ChipProps=this.props
    return (
        clickable?<MChip id={id} label={label} classes={classes.chip} avatar={avatar} icon={icon} color={color} variant={variant} onClick={onclick} onDelete={ondelete} clickable/>
                 :<MChip id={id} label={label} classes={classes.chip} avatar={avatar} icon={icon} color={color} variant={variant} onClick={onclick} onDelete={ondelete}/>
    );
  }
}

const styles = (theme: Theme) => ({
    chip: {margin: theme.spacing.unit}
});

export default withStyles(styles) (Chip)