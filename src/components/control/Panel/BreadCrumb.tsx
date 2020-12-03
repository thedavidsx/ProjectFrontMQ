import React  from 'react'
import MPaper from '@material-ui/core/Paper'
import MButton from '@material-ui/core/Button'
import {withStyles, Theme} from '@material-ui/core/styles'
import { Divider } from '@material-ui/core';

export interface BreadCrumbProps {
    classes?: any
    data?   :any
}

export interface BreadCrumbState {
}

class BreadCrumb extends React.Component<BreadCrumbProps, BreadCrumbState> {
  constructor(props: BreadCrumbProps) {
    super(props);

    this.state = {
    }
  }
//style={{position:'fixed'}}
render() {
    const {classes,data}= this.props 
    return (
      <MPaper elevation={10} className={classes.root} square={true} style={{position:'fixed'}} > 
        { 
            data.map((x:any,k:number)=>
                <span key={k}> 
                    <MButton size={"small"} >{x.text}</MButton>
                    <span>/</span>
                </span>
               )
        }
      </MPaper>
    );
  }
}

const styles = (theme: Theme )=> ({
    root:{ width:'100%' ,margin:'0px 8px 0px 0px', padding:'1px 0px 1px 0px' , zIndex:20}

});

export default withStyles(styles) (BreadCrumb)