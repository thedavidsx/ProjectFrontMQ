import React               from 'react'
import {withStyles, Theme} from '@material-ui/core/styles'
import IconButton          from '@material-ui/core/IconButton' 
import Badge               from '@material-ui/core/Badge' 
import List                from '@material-ui/core/List'
import ListItemText        from '@material-ui/core/ListItemText'
import ListItem            from '@material-ui/core/ListItem'
import ListItemAvatar      from '@material-ui/core/ListItemAvatar'
import NotificationsIcon   from '@material-ui/icons/Notifications'
import Popper              from '@material-ui/core/Popper'
import Typography          from '@material-ui/core/Typography'
import Avatar              from '@material-ui/core/Avatar'
import Button              from '@material-ui/core/Button'

import Dialog              from '@material-ui/core/Dialog'
import DialogContent       from '@material-ui/core/DialogContent'
import DialogTitle         from '@material-ui/core/DialogTitle'
import DialogContentText   from '@material-ui/core/DialogContentText'
import DialogActions       from '@material-ui/core/DialogActions'

export interface NotificationProps {
  notifications : Array<{message:string,read:boolean}>
  classes?      : any
}

export interface NotificationState {
  showPaper      : boolean
  showModal      : boolean
  anchorEl?      : any
  notifications? : Array<{message:string,read:boolean}>
  selectedIndex  : number
}

class Notification extends React.Component<NotificationProps, NotificationState> {
  constructor(props:NotificationProps) {
    super(props)
    this.state               = {showPaper:false,showModal:false,notifications:this.props.notifications,selectedIndex:0}
    this.HandleClick         = this.HandleClick.bind(this)
    this.HandleListItemClick = this.HandleListItemClick.bind(this)
    this.ShowModal           = this.ShowModal.bind(this)
    this.HandleCloseModal    = this.HandleCloseModal.bind(this)
  }

  FormatItem(message:string,read: boolean){
    let msg: string  =message.substr(0,10)
    msg.length<10?msg=msg:msg=msg+"..."
    return read?<Typography >{msg}</Typography>:<Typography variant="subtitle2">{msg}</Typography>
  }

  DetailNotification(notifications:any){
    let l :number=10
    return (
      <div className="backgroundColor:White">
        <Popper open={true} anchorEl={this.state.anchorEl} placement={'bottom-start'} transition>
          <List component="nav" >
            {notifications.map((item: any, k: number) => <ListItem key={k} button ><ListItemAvatar><Avatar className={"margin: 20"}>afp</Avatar></ListItemAvatar><ListItemText onClick={this.HandleListItemClick(k)} primary={this.FormatItem(item.message,item.read)}/></ListItem>)}
          </List>
        </Popper>
      </div>
    )
  }

  getModalStyle=()=> {
    const top  = 50  ;
    const left = 50  ;
    return {top: `${top}%`,left: `${left}%`, transform: `translate(-${top}%, -${left}%)`,position:'absolute' as 'absolute' }
  }

  HandleCloseModal(){
    this.setState({ showModal: false })
  }

  ShowModal(open:boolean){
    let index : number = 0
    let msg   : string = ""
    const { classes } = this.props
    index=this.state.selectedIndex;
    if (this.state.notifications!== undefined){msg=this.state.notifications[index].message}
    
    const styles = (theme:Theme) => ({
      paper : {position:'absolute',width: theme.spacing.unit * 50,backgroundColor: 'White',boxShadow: theme.shadows[5],padding: theme.spacing.unit * 4,outline: 'none'},
      root  : {...theme.mixins.gutters(),paddingTop: theme.spacing.unit * 2,paddingBottom: theme.spacing.unit * 2,width:'200px'}

    });
//style={this.getModalStyle()} className={classes.paper}
//<Modal open={open} onClose={this.HandleCloseModal}>
  return(  
    
      <div style={this.getModalStyle()} className={classes.paper}>
        <Dialog open={open} onClose={this.HandleCloseModal}>
          <DialogTitle>{"Mensaje Entrante"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <Typography>{msg}</Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions>  
                    
            <Button onClick={this.HandleCloseModal} color="primary" autoFocus>Cerrar</Button>
          </DialogActions>
        </Dialog>
      </div>
   

    )
  }

  

  
  countNotRead(notifications:any){
    let count: number=0
    notifications.map((item:any)=>{item.read?count=count:count=count+1})
    return count
  }

  HandleListItemClick=(index:number)=>(event:any)=>{
    this.setState((PrevState)=>({showPaper:!PrevState.showPaper,selectedIndex: index,showModal:true}))
    if (this.state.notifications!==undefined){
      this.state.notifications[index].read=true
      const msg: string=this.state.notifications[index].message     
    }
    
  }

  HandleClick=(event:any)=>{
    const { currentTarget } = event
    this.setState((PrevState)=>({showPaper:!PrevState.showPaper,anchorEl : currentTarget}))
  }

  render() {    
    return (
      <div>
        <IconButton color={"inherit"} onClick={this.HandleClick} >
           <Badge badgeContent={this.countNotRead(this.state.notifications)} color={"secondary"} >
              <NotificationsIcon />
           </Badge>
        </IconButton>
        {this.state.showPaper && this.DetailNotification(this.state.notifications)}
        {this.ShowModal(this.state.showModal)}
      </div>
    );
  }
}

const styles = (theme: Theme) => ({  
  root:{backgroundColor: theme.palette.background.paper},
  
});
export default withStyles(styles) (Notification)