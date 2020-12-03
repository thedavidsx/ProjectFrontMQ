import React               from 'react'
import MBadge              from '@material-ui/core/Badge'
import {withStyles, Theme} from '@material-ui/core/styles'
import { PropTypes }       from '@material-ui/core'


export interface BadgeProps {
    id?           : string
    classes?      : any
    children      : any //React.ReactNode
    badgeContent  : any
    color?        : PropTypes.Color | 'error'
    component?    : any
    invisible?    : boolean
    max?          : number
    showZero?     : boolean
    variant?      : 'standard' | 'dot';
}

export interface BadgeState {
}

class Badge extends React.Component<BadgeProps,BadgeState> {
  constructor(props: BadgeProps) {
    super(props);

    this.state = {
    }
  }

  render() {
      const {id,badgeContent,children,...rest}= this.props
    return (
      <MBadge id={id} badgeContent={badgeContent} {...rest}>{children}</MBadge>
    );
  }
}

const styles = (theme: Theme) => ({   
  });
export default withStyles(styles) (Badge)