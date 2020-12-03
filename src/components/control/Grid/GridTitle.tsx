import React              from "react"
import {withStyles,Theme} from "@material-ui/core/styles"
import Grid               from "@material-ui/core/Grid"
import Typography         from './../Data/Typography'


function GridTitle(props:any) {
  const {title,classes} = props;
  return (
    <Grid container  >
        <Grid item xs={12} sm={12} md={12} lg={12} >
            <Grid container className={classes.root}  >
              <Typography variant={"title"}>{title}</Typography>
            </Grid>            
        </Grid>
    </Grid>
  );
}

  
const style=(theme:Theme) => ({
  root:{padding:'10px 10px 10px 1px'}
})
export default withStyles(style)(GridTitle);