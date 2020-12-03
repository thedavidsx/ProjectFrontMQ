import React                 from 'react'
import {withStyles, Theme}   from '@material-ui/core/styles'
import Typography            from '@material-ui/core/Typography'
import ExpandMoreIcon        from '@material-ui/icons/ExpandMore'
import ExpansionPanel        from '@material-ui/core/ExpansionPanel'
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Paper                 from '@material-ui/core/Paper'

export interface AccordionProps {
  id             : string
  classes?       : any
  data           : Array<{title:string,text:string}>
}

export interface AccordionState {
  expanded?      : any
}

class Accordion extends React.Component<AccordionProps, AccordionState> {
  constructor(props: AccordionProps) {
    super(props)
    this.state        = {expanded:null}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (panel:any) => (event:any,expanded:any) =>  {    
    this.setState({expanded:expanded?panel:false })
  }

  render() {
    const {classes,data} = this.props
    const {expanded}     = this.state
    return (
        <Paper className={classes.root} >
          {
            data.map((item: any,k:number)=>
              <ExpansionPanel key={k} expanded={expanded === 'p' + k} onChange={this.handleChange('p' + k)}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} >
                  <Typography className={classes.heading} >{item.title}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails >
                  <Typography >{item.text}</Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel >
            )
          }
        </Paper>
    );
  }
}

const styles = (theme: Theme) => ({  
  root    : {width: '100%'},
  heading : {fontSize: theme.typography.pxToRem(15),fontWeight: theme.typography.fontWeightRegular},
  expanded: {margin: 'auto'} 
})

export default withStyles(styles) (Accordion)