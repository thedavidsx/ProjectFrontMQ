import React                   from 'react'
import { withStyles, Theme }   from '@material-ui/core/styles'
import List                    from '@material-ui/core/List'
import ListItem                from '@material-ui/core/ListItem'
import ListItemText            from '@material-ui/core/ListItemText'
import { NavLink }             from 'react-router-dom'
import Drawer                  from '@material-ui/core/Drawer'
import MenuRouter              from '../../router/MenuRouter'

export interface MenuProps {  
  classes?  : any
  open      : boolean
  menuClose : any
}

export interface MenuState {
}

class Menu extends React.Component<MenuProps,MenuState> {
  constructor(props: MenuProps) {
    super(props)
    this.state = {  }
  }
  render() {
    const {classes,open,menuClose} = this.props
    let routes=MenuRouter 
    return (
      <React.Fragment>
        <Drawer anchor={"left"} open={open} onClose={menuClose}>
          <div role="button">
            <div>
              <List component="nav" className={classes.list}>
                {
                  routes.map((prop: any, key: number) => {
                    return (
                      <NavLink to={prop.path} key={key} onClick={menuClose} style={{ textDecoration: 'none', color: 'white' }} >
                        <ListItem button  >                          
                          <ListItemText primary={prop.sidebarName} />
                        </ListItem>
                      </NavLink>)
                  })
                }
              </List>
            </div>
          </div>
        </Drawer>
      </React.Fragment>
    );
  }
}

const styles = (theme: Theme) => ({
  root           : { width: '100%'},
  grow           : { flexGrow: 1 },
  sectionDesktop : { display: 'none',  [theme.breakpoints.up('md')]: { display: 'flex' } },
  sectionMobile  : { display: 'flex',  [theme.breakpoints.up('md')]: { display: 'none' } },
  list           : { width: 250}
});
export default withStyles(styles) (Menu)