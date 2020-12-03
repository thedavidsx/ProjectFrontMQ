import React              from "react"
import {withStyles,Theme} from "@material-ui/core/styles";
import Grid               from "@material-ui/core/Grid";


function GridButton(props:any) {
  const {children} = props;
  return (
    <Grid container >
        <Grid item xs={12} sm={12} md={12} lg={12} >
            <Grid container direction="row" justify="flex-end">
                {children}
            </Grid>            
        </Grid>
    </Grid>
  );
}

  
const style=(theme:Theme) => ({
})
export default withStyles(style)(GridButton);