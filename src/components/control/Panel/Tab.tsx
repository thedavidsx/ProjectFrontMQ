import React          from 'react'
import MPaper         from '@material-ui/core/Paper'
import MTabs          from '@material-ui/core/Tabs'
import MTab           from '@material-ui/core/Tab'
import Typography     from '@material-ui/core/Typography'
import { withStyles, Theme } from '@material-ui/core/styles'

export interface TabProps {
  id        : string
  position? : "fixed" | "absolute" | "sticky" | "static" | "relative"
  color?    : "default" | "inherit" | "primary" | "secondary"
  classes?  : any
  children  : any
  actionsTabButton? : any
  reducerTabButton? : any
}
export interface TabContainerProps{
  title    : string
  children : any
}

export interface TabState {
    value  : number
}

class Tab extends React.Component<TabProps, TabState> {
  state={
    value:0
  }
  handleChange = (event : any, value : number) => {
    this.setState({ value });
  }

  render() {
    const { position,color,classes,reducerTabButton }:TabProps = this.props
    const { value } = this.state
    const data : any = this.props.children
        return (
          <React.Fragment>
            <MPaper color={color}>
              <MTabs value={value} onChange={this.handleChange}>
                {data.map((xx : any,i : number)=><MTab key= {i} label={xx.props.title}/>)}
              </MTabs>
            </MPaper>
            {data.map((xx : any ,k : number) => (k === value && xx))}        
          </React.Fragment>
        );
    }
}


export const TabContainer=(props: TabContainerProps)=>{
    const {title,children}:TabContainerProps=props
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {children}
      </Typography>
    );
}


const styles = (theme: Theme) => ({
    root: { flexGrow: 1, backgroundColor: theme.palette.background.paper }
});


export default withStyles(styles)(Tab);
