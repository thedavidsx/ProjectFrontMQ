import React                  from 'react'
import MExpansionPanel        from '@material-ui/core/ExpansionPanel'
import MExpansionPanelActions from '@material-ui/core/ExpansionPanelActions'
import MExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import MExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import { withStyles, Theme }  from '@material-ui/core'
import ExpandMoreIcon      from '@material-ui/icons/ExpandMore'
import Typography          from '@material-ui/core/Typography'

export interface ExpansionPanelProps {
    children?       : any
    //classes?       : any
    collapseprops? : any
    disabled?      : boolean
    expanded?      : boolean
    onchange?      : any
}
export interface ExpansionPanelActionsProps {
    children?      : any
    classes?       : any
}
export interface ExpansionPanelSummaryProps {
    children?         : any
    classes?         : any
    expandicon?      : any
    iconbuttonprops? : any
}
export interface ExpansionPanelDetailsProps {
    children?       : any
    classes?       : any
}

export interface ExpansionPanelState {
}

class ExpansionPanel extends React.Component<ExpansionPanelProps, ExpansionPanelState> {
    render() {
      const {children,collapseprops,disabled,expanded,onchange}:ExpansionPanelProps = this.props
    return (
       disabled?<MExpansionPanel expanded={expanded} CollapseProps={collapseprops} onChange={onchange} disabled>{children}</MExpansionPanel>
               :<MExpansionPanel expanded={expanded} CollapseProps={collapseprops} onChange={onchange}>{children}</MExpansionPanel>
    );
  }
}
export const ExpansionPanelActions=(props:ExpansionPanelActionsProps)=>{
    const {children,classes} : ExpansionPanelActionsProps = props  
    return (
      <MExpansionPanelActions classes={classes.root}>{children}</MExpansionPanelActions>
    );
}
export const ExpansionPanelSummary=(props:ExpansionPanelSummaryProps)=>{
    const {children,classes,expandicon} : ExpansionPanelSummaryProps = props  
    console.log(expandicon);
    return (
      <MExpansionPanelSummary  expandIcon={<ExpandMoreIcon/>}>{children}</MExpansionPanelSummary>
    );
}
export const ExpansionPanelDetails=(props:ExpansionPanelDetailsProps)=>{
    const {children,classes} : ExpansionPanelDetailsProps = props  
    return (
      <MExpansionPanelDetails >{children}</MExpansionPanelDetails>
    );
}

const styles = (theme :Theme ) => ({
    root    : { width: '100%' },
    expanded: { margin: 'auto'}
  
})
export default withStyles(styles) (ExpansionPanel)