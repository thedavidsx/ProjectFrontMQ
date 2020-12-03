import React     from 'react'
import MSnackbar from '@material-ui/core/Snackbar'
import { withStyles , Theme } from '@material-ui/core/styles'
import MSnackbarContent from '@material-ui/core/SnackbarContent'

export interface SnackBarProps {
    action           : any
    anchororigin     : any
    autohideduration : number
    children         : any
    classes          : any
    contentprops     : any
    key              : any
    message          : any
    onclose          : any
    onenter          : any
    onexit           : any
    open             : any
    resumehideduration : any
}
export interface SnackBarContentProps {
    action : any
    classes: any 
    message: any

}
export interface SnackBarState {
}

class SnackBar extends React.Component<SnackBarProps, SnackBarState> {
  render() {
      const {action, anchororigin, autohideduration, children, classes, contentprops, key, message, onclose, onenter, onexit, open, resumehideduration } :SnackBarProps = this.props
    return (
      <MSnackbar action={action} anchorOrigin={anchororigin} autoHideDuration={autohideduration} classes={classes} ContentProps={contentprops} key={key} message={message} onClose={onclose} onEnter={onenter} onExit={onexit} open={open} resumeHideDuration={resumehideduration}  >
        {children}
      </MSnackbar>
    );
  }
}

export const SnackbarContent=(props : SnackBarContentProps)=>{
    const {action, classes, message} :SnackBarContentProps=props
    return <MSnackbarContent action={action} classes={classes} message={message}></MSnackbarContent>
}

const styles = (theme: Theme) => ({
    root   : {},
    checked: {}
});

export default withStyles(styles) (SnackBar)
