import * as React from 'react';
import { withStyles }    from '@material-ui/core/styles'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'

import ListBox from '../../../control/Data/ListBox'
import Fade from '@material-ui/core/Fade';
import {connect}         from 'react-redux'

import acctionsPopperOpen from '../../../../redux/actions/acctionsPopperOpen'
import actionsPopperTarget from '../../../../redux/actions/acctionsPopperTarget'
import actionsbadgeContent from '../../../../redux/actions/actionsbadgeContent'
import acctionMessages from '../../../../redux/actions/acctionMessages'


const styles = (theme: any) => ({
  root: {
    display: 'flex',
    'z-index' : 1
  }
});

export interface ListaMensajesBusProps {
  acctionsPopperOpen? : any
  reducerPopperOpen? : any
  actionsPopperTarget? : any
  reducerPopperTarget? : any
  classes?   : any
  children? : any
  acctionMessages? : any
  reducerMessages? : any
}

export interface ListaMensajesBusState {
    messages?  : any
    open? : any
    anchorEl?: any
}

export  class ListaMensajesBus extends React.Component<ListaMensajesBusProps,ListaMensajesBusState> {
  constructor(props: ListaMensajesBusProps) {
    super(props);

    this.state = {
        messages : [
            {
                primary : "0",
                secondary : "Prueba"
            },
            {
                primary : "1",
                secondary : "Prueba"
            },
            {
                primary : "3",
                secondary : "Prueba"
            },
            {
                primary : "2",
                secondary : "Prueba"
            }
        ],
        open: false
    }
  }

  handleClose = (event : any) => {
    this.setState({ open: false });
    this.props.acctionsPopperOpen(false);
  };

  componentDidUpdate(){
    //this.setState({ messages: this.props.reducerMessages });
  }

  public render() {
    const { classes } = this.props;
    const data : any = this.props.children
    return (
      <div className={classes.root}>
        <Popper open={this.props.reducerPopperOpen} anchorEl={this.props.reducerPopperTarget}  placement= "bottom-end" transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps} style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}>
                 <Paper>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList>
                      {this.props.reducerMessages.map((xx : any,i : number)=>
                        <MenuItem key={i}>{xx}</MenuItem>
                      )}
                    </MenuList>
                  </ClickAwayListener>
                </Paper> 
              </Grow>
            )}
        </Popper> 
      </div>
    );
  }
}

const mapStateToProps=(state: any)=>{
  return {
    reducerPopperOpen: state.reducerPopperOpen,
    reducerPopperTarget : state.reducerPopperTarget,
    reducerMessages  : state.reducerMessages
  }
}

const mapDispatchToProps = (dispatch: any)=>{
  return {
    acctionsPopperOpen: (value: any) => dispatch(acctionsPopperOpen(value)),
    actionsPopperTarget: (value: any) => dispatch(actionsPopperTarget(value)),
    acctionMessages: (value: any) => dispatch(acctionMessages(value))    
  }
}

export default withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(ListaMensajesBus))
