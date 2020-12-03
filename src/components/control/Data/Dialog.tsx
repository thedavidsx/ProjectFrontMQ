import React               from 'react'
import MDialog             from '@material-ui/core/Dialog'
import MDialogTitle        from '@material-ui/core/DialogTitle'
import MDialogContent      from '@material-ui/core/DialogContent'
import MDialogActions      from '@material-ui/core/DialogActions'
import MDialogContentText  from '@material-ui/core/DialogContentText'
import MDivider            from '@material-ui/core/Divider'
import {Button}            from '../../commons/Sonda.React.Control'
import {withStyles, Theme} from '@material-ui/core/styles'

export interface DialogProps {
  title           : string
  message         : string
  open            : boolean
  children?       : React.ReactNode
  fullScreen?     : boolean
  fullWidth?      : boolean
  maxWidth?       : 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false
  PaperComponent? : any
  PaperProps?     : any
  scroll?         : 'body' | 'paper'
  onClose?        : any
}

export interface DialogState {
  open:boolean
}


class Dialog extends React.Component<DialogProps,DialogState> {
  constructor(props: DialogProps) {
    super(props);
    this.state = {
        open : true
    }
  }
 
  
  render() {
    
      const {open,children,fullWidth,title,onClose,message,...rest}= this.props
     // console.log(open,"state", this.state.open)
    return (
      <MDialog open={open} onClose={onClose} fullWidth={true} {...rest}>
        <MDialogTitle >
          {title}
        </MDialogTitle>
        <MDialogContent>
          <MDialogContentText>
            {message}
            {children}
          </MDialogContentText>
        </MDialogContent>
        <MDivider/>
        <MDialogActions>
          <Button onClick={onClose} color={"primary"} variant={"contained"}>Cerrar</Button>
        </MDialogActions>
      </MDialog>
    );
  }
}


const styles = (theme: Theme) => ({   
  root: { borderBottom: `1px solid ${theme.palette.divider}`, margin: 0, padding: theme.spacing.unit * 2}
});
export default withStyles(styles) (Dialog)