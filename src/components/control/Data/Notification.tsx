import React               from 'react'
import {connect}           from 'react-redux'
import NotificationsIcon   from '@material-ui/icons/Notifications'
import {withStyles, Theme} from '@material-ui/core/styles'
import List                from '@material-ui/core/List'
import ListItem            from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider';
import ListItemAvatar      from '@material-ui/core/ListItemAvatar'
import ListItemText        from '@material-ui/core/ListItemText'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Drawer                  from '@material-ui/core/Drawer'
import {Paper,IconButton,Badge,Dialog,Popper,Typography,Avatar} from '../../commons/Sonda.React.Control'

import acctionMessages      from '../../../redux/actions/acctionMessages'
import acctionCountMessages from '../../../redux/actions/acctionCountMessages'

export interface NotificationProps {
  notifications : any
  classes?       : any
  acctionMessages? : any
  reducerMessages? : any
  acctionCountMessages? :  any
  reducerCountMessages? : any
  open?      : boolean
  notificationClose : any
}
//avatar:string,
export interface NotificationState {
  showPaper      : boolean
  showDialog     : boolean
  anchorEl?      : any
  notifications  : any
  selectedIndex  : number
  open : boolean
}
// avatar:string
class Notification extends React.Component<NotificationProps,NotificationState> {
 
  constructor(props: NotificationProps) {
    super(props);
    this.state = {
      showPaper     : false,
      showDialog    : false,
      notifications : this.props.notifications,
      selectedIndex : 0,
      open : false
    }
    this.HandleClick         = this.HandleClick.bind(this)
    this.countNotRead        = this.countNotRead.bind(this)
    this.ShowDialog          = this.ShowDialog.bind(this)
    this.DetailNotification  = this.DetailNotification.bind(this)
    this.HandleListItemClick = this.HandleListItemClick.bind(this)
    this.clickClose = this.clickClose.bind(this)
    this.CheckItem = this.CheckItem.bind(this)
  }
  countNotRead(){
    let count: number=0
    this.props.reducerMessages.map((item:any)=>{item.read?count=count:count=count+1})
  //  console.log(this.props.reducerCountMessages.length,"countNotRead")
    return count
  }
  HandleClick=(event:any)=>{
    const { currentTarget } = event
    this.setState({anchorEl : currentTarget,open: true },() => console.log(this.state.open))
  }
  //showPaper:!this.state.showPaper,
  HandleListItemClick=(index:number)=>(event:any)=>{
    this.setState({showPaper:!this.state.showPaper,selectedIndex: index,showDialog:true})
    this.props.reducerMessages[index].read=true
    const msg: string=this.props.reducerMessages[index].message   
  }

  componentWillUpdate(){
    //console.log(this.props.reducerMessages);
  }
  /* 
    REVISAR EN EL DISEÑO
    <ListItemAvatar><Avatar className={"margin: 20"}>{item.avatar}</Avatar></ListItemAvatar>
  */

  handleDrawerClose = () => {
    this.setState({ open: false });
    
  };

  
  DetailNotification=()=>{
    let count=this.countNotRead()
    const {classes,open,notificationClose} = this.props

    return (
      <div className="backgroundColor:White">
{/* <Paper className="padding 20px 10px 20px 10px; width:200px"  > */}
        <ClickAwayListener onClickAway={this.handleDrawerClose}>
          <div>
            <Drawer anchor={"right"} open={this.state.open}  variant="persistent" elevation={100}>
              <div role="button">
                <div>
                  {count > 0 && <Typography variant="body2"> Tienes {count} mensajes nuevos</Typography>}
                  <List component="nav" className={classes.list}>
                    {this.props.reducerMessages.map((item: any, k: number) =>
                      <ListItem key={item.key} button >
                        <ListItemText  onClick={this.HandleListItemClick(k)} primary={this.CheckItem(item.subject,item.read)} secondary={this.FormatItem(item.message)}/>
                        <Divider absolute/>
                      </ListItem>
                        
                    )}
                  </List>
                </div>
              </div>
            </Drawer>
          </div>
        </ClickAwayListener>
{/* </Paper>  */}
 


        
      </div>

    )
  }
  
  FormatItem(message:string){
    let msg: string  = "";
    if (message.length > 50){
      for (let i = 0; i < message.length;){
        if (i != 0){
          msg = msg + "  ";
        }
        msg = msg + message.substr(i,50);
        if(i == 100){
          msg = msg.substr(0, (i - 4)) +"...";
          return msg;
        }
        i = i + 50;
      }
    }else{
      msg =  message;
    }

    //msg.length < 10 ? msg = msg:msg = msg +"...";
    return msg;
  }

  CheckItem (subject : string,read: boolean){
    return read?<Typography >{subject}</Typography>:<Typography variant="subtitle2">{subject}</Typography>
  }
 
  clickClose=()=>{
    this.setState({ showDialog: false })
  }

  ShowDialog=()=>{
    let index  : number = this.state.selectedIndex
    let tittle : string = "Notificación " + index
    let message: string = this.props.reducerMessages[index].message    
    return (<Dialog open={this.state.showDialog} onClose={this.clickClose} title={tittle}  message={message} ></Dialog>)
  }
  render() {
    return (
      <React.Fragment>
        <IconButton color={"inherit"} onClick={this.HandleClick} >
          <Badge badgeContent={this.countNotRead()} color={"secondary"} >
            <NotificationsIcon />
          </Badge>
        </IconButton>
        {this.DetailNotification()}
        {this.state.showDialog && this.ShowDialog()}
      </React.Fragment>
    );
  }  
}
//this.state.showPaper && 
// const styles = (theme: Theme) => ({  
//   root:{backgroundColor: theme.palette.background.paper }  
// });

const styles = (theme: Theme) => ({
  root           : { width: '100%' , backgroundColor: theme.palette.background.paper},
  grow           : { flexGrow: 1 },
  sectionDesktop : { display: 'none',  [theme.breakpoints.up('md')]: { display: 'flex' } },
  sectionMobile  : { display: 'flex',  [theme.breakpoints.up('md')]: { display: 'none' } },
  list           : { width: 400}
});


const mapStateToProps=(state: any)=>{
  return {
    reducerCountMessages : state.reducerCountMessages,
    reducerMessages  : state.reducerMessages
  }
}

const mapDispatchToProps = (dispatch: any)=>{
  return {
    acctionCountMessages: (value: any) => dispatch(acctionCountMessages(value)),
    acctionMessages: (value: any) => dispatch(acctionMessages(value))    
  }
}

export default withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(Notification))