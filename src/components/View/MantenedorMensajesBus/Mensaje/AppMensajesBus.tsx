import * as React from 'react';
import * as signalR from '@aspnet/signalr';
import { connect } from 'react-redux'
import { appConf } from '../../../commons/appConf'


import actionsbadgeContent from '../../../../redux/actions/actionsbadgeContent'

import acctionMessages from '../../../../redux/actions/acctionMessages'

import acctionCountMessages from '../../../../redux/actions/acctionCountMessages'

const nameUser : any = ""

const app : any = ""

const apiGLobal = appConf.host + appConf.apiClienteMensajes;

export interface AppMensajeBusProps {
  actionsbadgeContent? : any
  listMensaje? : any
  acctionMessages? : any,
  dataMessage? : any,
  acctionCountMessages? : any
  arrNoti : any
}

export interface AppMensajeBusState {
  message? : any
  messages? : any
  numMessage? : any
  dataMessage? : any
  arrNoti : any
}

export  class AppMensajeBus extends React.Component<AppMensajeBusProps, AppMensajeBusState> {
  constructor(props: AppMensajeBusProps) {
    super(props);

    this.state = {
      messages : [],
      message : "",
      numMessage : 0,
      dataMessage : [],
      arrNoti : []
    }
  }

  static connection : any
  static conecT : boolean;

  componentDidMount () {
    // const nameUser = window.prompt('Nombre Usuario:', '');
    // const app = window.prompt('COD APP:', '');
    AppMensajeBus.conecT = false;
    AppMensajeBus.connection  = new signalR.HubConnectionBuilder().withUrl(apiGLobal + "?user="+ nameUser +"&cod_aplicacion="+ app).build();
  

    AppMensajeBus.connection.start({withCredentials:false})
      .then(() => {
        console.info('SondaMQ Connected'); 
        AppMensajeBus.conecT = true;
      }).catch((err : any) => console.error('SondaMQ Connection Error: ', err)); 


    AppMensajeBus.connection.on('enviamensaje', (user : any ,subject : any, message :any) => {
      const data: Array<any> = this.state.messages;
      let count = 0;

      this.setState({numMessage : this.state.numMessage + 1})

      let noti = {
        "key"     : this.state.numMessage,
        "read"    : false,
        "subject" : subject,
        "message" :  message
      }

      data.push(noti);

      this.setState({ arrNoti : data },() =>this.props.arrNoti(this.state.arrNoti));


      this.state.arrNoti.map((item:any)=>{item.read?count=count:count=count+1})
      
      console.log(count)
      // this.state.dataMessage.map((item:any)=>{
      //   item.read?count=count:count=count+1
      // })

      //this.props.acctionCountMessages(count);

      this.props.acctionMessages(this.state.arrNoti);

      // console.info(count); 

      // this.props.actionsbadgeContent(this.state.numMessage == 0 ? "" : this.state.numMessage);
    });


  }



  public render() {
    return (
      // <React.Fragment handleNotifaction = {() =>  this.props.handleNotifaction(this.state.message)}></React.Fragment>
      <div>
        {/* <button onClick={() =>  this.props.handleNotifaction(this.state.message)}></button> */}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    reducerbadgeContent: state.reducerbadgeContent,
    reducerMessages : state.reducerMessages,
    reducerCountMessages : state.reducerCountMessages
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    actionsbadgeContent: (value: string) => dispatch(actionsbadgeContent(value)),
    acctionMessages: (value: Array<any>) => dispatch(acctionMessages(value)),
    acctionCountMessages: (value: any) => dispatch(acctionCountMessages(value))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AppMensajeBus)