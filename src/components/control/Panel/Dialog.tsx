import React                 from 'react'
import MDialog               from '@material-ui/core/Dialog'
import MDialogActions        from '@material-ui/core/DialogActions'
import MDialogContent        from '@material-ui/core/DialogContent'
import MDialogContentText    from '@material-ui/core/DialogContentText'
import MDialogTitle          from '@material-ui/core/DialogTitle'
import { Theme, withStyles } from '@material-ui/core';


export interface DialogProps {
    open            : boolean
    onclose         : any
    fullscreen      : boolean
    fullwidth       : boolean
    maxwidth        : "xs" | "sm" | "md" | "lg" | "xl" | false
    scroll          : "body" | "paper"
    papercomponent  : any
    children        : any
    transitioncomponent  : any
    disablebackdropclick : boolean
    disableescapekeydown : boolean
}
export interface DialogActionsProps{
    children : any
    classes  : any

}
export interface DialogContentProps{
    children : any
    classes  : any
    
}
export interface DialogContentTextProps{
    children : any
    classes  : any
}
export interface DialogTitleProps{
    children : any    
    classes  : any
}


export interface DialogState {
}

class Dialog extends React.Component<DialogProps, DialogState> {
  constructor(props: DialogProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
      const {open,onclose,fullscreen,fullwidth,maxwidth,scroll,papercomponent,children,transitioncomponent,disablebackdropclick,disableescapekeydown}:DialogProps=this.props
    return (
      <MDialog open ={open} onClose={onclose} fullScreen={fullscreen} fullWidth={fullwidth} maxWidth={maxwidth} scroll={scroll} PaperComponent={papercomponent} TransitionComponent={transitioncomponent} disableBackdropClick={disablebackdropclick} disableEscapeKeyDown={disableescapekeydown}>
        {children}
      </MDialog>
    );
  }
}

export const DialogActions=(props:DialogActionsProps)=>{
    const {children,classes} : DialogActionsProps = props  
    return (
      <MDialogActions classes={classes.root}>{children}</MDialogActions>
    );
}

export const DialogContent=(props:DialogContentProps)=>{
    const {children,classes} : DialogContentProps = props  
    return (
      <MDialogContent classes={classes.root}>{children}</MDialogContent>
    );
}

export const DialogContentText=(props:DialogContentTextProps)=>{
    const {children,classes} : DialogContentTextProps = props  
    return (
      <MDialogContentText classes={classes.root}>{children}</MDialogContentText>
    );
}

export const DialogTitle=(props:DialogTitleProps)=>{
    const {children,classes} : DialogTitleProps = props  
    return (
      <MDialogTitle classes={classes.root}>{children}</MDialogTitle>
    );
}


const styles = (theme: Theme) => ({
    root: { borderBottom: `1px solid ${theme.palette.divider}`, margin: 0, padding: theme.spacing.unit * 2 }
});

export default withStyles(styles) (Dialog)