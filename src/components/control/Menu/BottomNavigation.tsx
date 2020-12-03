import React                    from 'react'
import MBottomNavigation        from '@material-ui/core/BottomNavigation'
import MBottomNavigationAction  from '@material-ui/core/BottomNavigationAction'
import { withStyles, Theme }           from '@material-ui/core/styles'


interface BottomNavigationProps {
    id          : string
    classes?    : any
    children    : any
    onchange?   : any 
    showlabels? : boolean
    value?      : any
}

interface BottomNavigationActionProps {
    label : string
    icon  : any
    value : string
}

interface BottomNavigationState {
}

class BottomNavigation extends React.Component<BottomNavigationProps, BottomNavigationState> {
 
  render() {
    const {id,value,onchange,showlabels,classes,children} : BottomNavigationProps=this.props  
    return (
        showlabels?<MBottomNavigation id={id} value={value} onChange={onchange} className={classes.root} showLabels>{children}</MBottomNavigation>
                  :<MBottomNavigation id={id} value={value} onChange={onchange} className={classes.root}>{children}</MBottomNavigation>
    );
  }
}

export const BottomNavigationAction=(props:BottomNavigationActionProps)=>{
  const {label,icon,value} : BottomNavigationActionProps = props  
  return (
    <MBottomNavigationAction label={label} value={value} icon={icon}></MBottomNavigationAction>
  );
}



const styles = (theme : Theme)=> ({
    root: { width: 500 }
});
  
export default withStyles(styles) (BottomNavigation)