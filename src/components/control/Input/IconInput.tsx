import React          from 'react'
import { withStyles, Theme } from '@material-ui/core/styles'
import MPaper         from '@material-ui/core/Paper'
import MIconButton    from '@material-ui/core/IconButton'
import MInputBase from '@material-ui/core/InputBase'


export interface IconInputProps {
  id            : string
  children      : any
  classes?      : any
  onchange?     : any
  disabled?     : boolean
  type?         : string
  placeholder?  : string
}

export interface IconInputState {
}

class IconInput extends React.Component<IconInputProps, IconInputState> {
    static defaultProps: IconInputProps = {
        id          : "",
        children    : null,
        classes     : null,
        placeholder : "",
        disabled    : false,
        type        : "text",
      }
    
    render() {
        const { id, children, classes, onchange, type, placeholder, disabled }:IconInputProps = this.props
        return (
            <MPaper className={classes.root} elevation={1}>
                <MIconButton className={classes.iconButton}>
                    {children}
                </MIconButton>
                {disabled?<MInputBase className={classes.input} placeholder={placeholder} disabled/>
                         :<MInputBase className={classes.input} placeholder={placeholder} />
                }
            </MPaper>
        );
    }
}

const styles = (theme: Theme )=> ({
      root       : { padding: '2px 4px', display: 'flex',  alignItems: 'center', width: 280  },
      input      : { marginLeft: 8, flex: 1 },
      iconButton : { padding: 10 },
      divider    : { width: 1, height: 28, margin: 4 }
  });
  
export default withStyles(styles) (IconInput)
  