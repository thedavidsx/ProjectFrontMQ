import React              from "react"
import {withStyles,Theme} from "@material-ui/core/styles";
import Grid               from "@material-ui/core/Grid";


function GridContainer(props:any) {
  const { classes, children, ...rest } = props;
  return (
    <Grid container className={classes.grid}  {...rest}>{children}</Grid>
  );
}

const style=(theme:Theme) => ({
  //grid: {backgroundColor: "#eeeeee"}
})
export default withStyles(style)(GridContainer);
