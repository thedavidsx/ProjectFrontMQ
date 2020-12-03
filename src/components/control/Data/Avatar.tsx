import React   from 'react'
import MAvatar from '@material-ui/core/Avatar'
import {withStyles, Theme} from '@material-ui/core/styles'

export interface AvatarProps {
    alt?       : string
    childrenClassName?: string
    component? : any
    imgProps?  : React.HtmlHTMLAttributes<HTMLImageElement>
    sizes?     : string
    src?       : string
    srcSet?    : string
    className  : string
}

export interface AvatarState {
}

class Avatar extends React.Component<AvatarProps,AvatarState> {
  constructor(props: AvatarProps) {
    super(props);

    this.state = {
    }
  }

  render() {
    const {children,...rest}= this.props
    return (
      <MAvatar {...rest}>{children}</MAvatar>
    );
  }
}


const styles = (theme: Theme) => ({   
});
export default withStyles(styles) (Avatar)