import React              from "react"
import {withStyles,Theme} from "@material-ui/core/styles"
import Grid               from "@material-ui/core/Grid";

function GridItem({ ...props }) {
  const { classes, children, ...rest } = props;
  return (
    <Grid item {...rest} className={classes.grid}>{children}</Grid>
  );
}

const style =(theme:Theme)=> (
  {
  //  grid: {padding: "0 15px !important"} 
  }
  )
export default withStyles(style)(GridItem);
