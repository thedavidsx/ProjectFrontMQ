import React               from 'react'
import MTab                from '@material-ui/core/Tab'
import MTabs               from '@material-ui/core/Tabs'
import MPaper              from '@material-ui/core/Paper'
import MTypography         from '@material-ui/core/Typography'
import {withStyles, Theme} from '@material-ui/core/styles'
import {connect}         from 'react-redux'
import tabChange from '../../../redux/actions/tabChange';

export interface TabsProps {
  id       : string
  color?    : "default" | "inherit" | "primary" | "secondary" 
  children : any
  reduxTab? : any
  tabChange? : any
}

export interface TabsState {
  value     : any
}

export interface TabContainerProps{
  title    : string
  children : any
}

class Tabs extends React.Component<TabsProps,TabsState> {
  constructor(props: TabsProps) {
    super(props);

  }

 
  state = {
    value : 0
  }

  handleChange = (event : any, value : number) => {

    this.props.tabChange(value);
  }


  render() {
    const {color,id,reduxTab,tabChange,...rest} = this.props
    const data : any = this.props.children
    const { value }  = this.state
    return (
      
      <React.Fragment>
        <MPaper id={id}>
          <MTabs value={reduxTab} onChange={this.handleChange} {...rest}>
            {data.map((xx : any,i : number)=><MTab key= {i} label={xx.props.title}/>)}
          </MTabs>
        </MPaper>
        {data.map((xx: any ,k: number) => (k === reduxTab && xx))} 
      </React.Fragment>
    );
  }
}

export const TabContainer=(props: TabContainerProps)=>{
  const {title,children}:TabContainerProps=props
  return (
    <MTypography component="div" style={{ padding: 8 * 3 }}>
      {children}
    </MTypography>
  );
}

const styles = (theme: Theme) => ({   
  root: { flexGrow: 1, backgroundColor: theme.palette.background.paper }
});

const mapStateToProps=(state: any)=>{return {reduxTab: state.reduxTab}}

const mapDispatchToProps = (dispatch: any)=>{return {tabChange: (value: number) => dispatch(tabChange(value)) }}

export default withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(Tabs))
