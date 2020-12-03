import React from 'react'
import { BreadCrumb, AppBar, IconButton, Notification } from '../commons/Sonda.React.Control'
import { withStyles, Theme } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import MailIcon from '@material-ui/icons/Mail'
import MoreIcon from '@material-ui/icons/MoreVert'
// import { notifications } from '../../data/dataDemo'

import AppNotificationBus from '../View/MantenedorMensajesBus/Mensaje/AppMensajesBus'

export interface HeaderProps {
  classes: any
  open: boolean
  menuOpen: any
}

export interface HeaderState {
  open: boolean
  openNoti : boolean
  notifications : any
}

class Header extends React.Component<HeaderProps, HeaderState> {

  constructor(props: HeaderProps) {
    super(props);
    this.state = {open:props.open,openNoti:true,notifications:[]}

  }


  notificationClose=()=>{
    this.setState({openNoti:!this.state.openNoti})
  }

  handlerNotification=(arrNot : any )=>{
    
    this.setState({notifications : arrNot},()=>console.log(this.state.notifications))
  }

  public render() {
    const { classes, menuOpen } = this.props
    return (
      <React.Fragment>
        <div >
          <AppBar position={"fixed"}>
            <IconButton id="ico1" color={"inherit"} onClick={menuOpen}><MenuIcon /></IconButton>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <AppNotificationBus arrNoti={this.handlerNotification}/>
              
              <IconButton id="ico1" color={"inherit"} ><MailIcon /></IconButton>
              <Notification notifications={this.state.notifications} notificationClose={this.notificationClose} open={this.state.openNoti}/>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton color={"inherit"}><MoreIcon /></IconButton>
            </div>
          </AppBar>
          <br></br>
          <br></br>
        </div>
      </React.Fragment>
    );
  }
}

const styles = (theme: Theme) => ({
  menuButton: { marginLeft: -12, marginRight: 20 },
  grow: { flexGrow: 1 },
  sectionDesktop: { display: 'none', [theme.breakpoints.up('md')]: { display: 'flex' } },
  sectionMobile: { display: 'flex', [theme.breakpoints.up('md')]: { display: 'none' } }
});

export default withStyles(styles)(Header)