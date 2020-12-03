import React              from "react"
import {withStyles,Theme} from "@material-ui/core/styles"
import Grid               from "@material-ui/core/Grid"
import Typography         from './../Data/Typography'


function GridSubTitle(props:any) {
  const {title,classes} = props;
  return (
    <Grid container style={{width:'80%'}}>
        <Grid item xs={12} sm={12} md={12} lg={12} >
            <Grid container direction="row"   className={classes.root}>
            <Typography variant={"subtitle1"}>{title}</Typography>
            </Grid>            
        </Grid>
    </Grid>
  );
}

  
const style=(theme:Theme) => ({
  root:{padding:'10px 10px 10px 20px'}
})
export default withStyles(style)(GridSubTitle);

//justify="flex-start"