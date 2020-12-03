import React, { EventHandler } from 'react'
import {withStyles, Theme}     from '@material-ui/core/styles'
import {Switch,Route,Redirect} from 'react-router-dom'
import MenuRouter              from '../../router/MenuRouter'
import {BreadCrumb,Paper,Button,Fab,GridContainer,GridItem,IconButton,Typography} from '../commons/Sonda.React.Control'

export interface ContentProps {

  classes? : any
}

export interface ContentState {}


const switchRoutes = (
  <Switch>
    {MenuRouter.map((prop:any, key:number) => {
      return (
        prop.redirect?<Redirect from={prop.path} to={prop.to} key={key} />
                     :<Route path={prop.path} component={prop.component} key={key} />
      )
    })}
  </Switch>
);



class Content extends React.Component<ContentProps, ContentState> {
  
  render() {
    const {classes}=this.props
    
    return ( 
      <React.Fragment>
        <br></br>
        <br></br>
        <br></br>  
      
        <GridContainer  className={classes.root} spacing={0} style={{padding:'1px 40px 1px 40px'}} alignItems={"center"} justify={"center"}>
          {switchRoutes}
        </GridContainer>
      </React.Fragment>
    );
  }
}

const styles = (theme: Theme) => ({
  root : {flexGrow: 1  }
});

export default withStyles(styles) (Content)
