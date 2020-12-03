// import React from 'react';
// import PropTypes from 'prop-types';
// import Button from '@material-ui/core/Button';
// import ClickAwayListener from '@material-ui/core/ClickAwayListener';
// import Grow from '@material-ui/core/Grow';
// import Paper from '@material-ui/core/Paper';
// import Popper from '@material-ui/core/Popper';
// import MenuItem from '@material-ui/core/MenuItem';
// import MenuList from '@material-ui/core/MenuList';
// import { withStyles } from '@material-ui/core/styles';

// const styles = theme => ({
//   root: {
//     display: 'flex',
//     'z-index' : 1
//   },
//   paper: {
//     marginRight: theme.spacing.unit * 2,
//   },
// });

// class MenuListComposition extends React.Component {
//   state = {
//     open: false,
//   };

//   handleToggle = () => {
//     this.setState(state => ({ open: !state.open }));
//   };

//   handleClose = event => {
//     // if (this.anchorEl.contains(event.target)) {
//     //   return;
//     // }

//     this.setState({ open: false });
//   };

//   render() {
//     const { classes } = this.props;
//     const { open } = this.state;

//     return (
//       <div className={classes.root}>
//         <div>
//           <Button
//             // buttonRef={node => {
//             //   this.anchorEl = node;
//             // }}
//             onClick={this.handleToggle}
//           >
//           asdasdasdasdad
//           </Button>
//           <Popper open={open} anchorEl={this.anchorEl} transition disablePortal={false} placement="top">
//             {({ TransitionProps, placement }) => (
//               <Grow
//                 {...TransitionProps}
//                 id="menu-list-grow"
//                 style={{ transformOrigin: placement === 'top' ? 'top' : 'top' }}
//               >
//                 <Paper>
//                   <ClickAwayListener onClickAway={this.handleClose}>
//                     <MenuList>
//                       <MenuItem>Profile</MenuItem>
//                       <MenuItem>My account</MenuItem>
//                       <MenuItem>Logout</MenuItem>
//                     </MenuList>
//                   </ClickAwayListener>
//                 </Paper>
//               </Grow>
//             )}
//           </Popper>
//         </div>
//       </div>
//     );
//   }
// }

// MenuListComposition.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(MenuListComposition);

// // onClick={this.handleClose}

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  typography: {
    padding: theme.spacing.unit * 2,
  },
});

class SimplePopper extends React.Component {
  state = {
    anchorEl: null,
    open: false,
  };

  handleClick = event => {
    const { currentTarget } = event;
    console.log(event);
    this.setState(state => ({
      anchorEl: currentTarget,
      open: !state.open,
    }));
  };

  render() {
    const { classes } = this.props;
    const { anchorEl, open } = this.state;
    const id = open ? 'simple-popper' : null;

    return (
      <div>
        <Button aria-describedby={id} variant="contained" onClick={this.handleClick}>
          Toggle Popper
        </Button>
        <Popper id={id} open={open} anchorEl={anchorEl} transition placement="top-end">
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper>
                <Typography className={classes.typography}>The content of the Popper.</Typography>
              </Paper>
            </Fade>
          )}
        </Popper>
      </div>
    );
  }
}

SimplePopper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimplePopper);