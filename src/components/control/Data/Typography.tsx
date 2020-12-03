import React               from 'react'
import MTypography         from '@material-ui/core/Typography'
import {withStyles, Theme} from '@material-ui/core/styles'

export interface TypographyProps {
    children?        : any
    align?           : 'inherit' | 'left' | 'center' | 'right' | 'justify'
    color?           : 'inherit' | 'primary' | 'secondary' | 'default' | 'textPrimary' | 'textSecondary' | 'error';
    component?       : any
    gutterBottom?    : boolean
    headlineMapping? : any
    inline?          : boolean
    noWrap?          : boolean
    paragraph?       : boolean
    variant?         : 'h1'  | 'h2'  | 'h3'  | 'h4'  | 'h5'  | 'h6'  | 'subtitle1'  | 'subtitle2'  | 'body1'  | 'body2'  | 'caption'  | 'button'  | 'overline'  | 'display3'  | 'display2'  | 'display1'  | 'headline'  | 'title'  | 'subheading'
}

export interface TypographyState {
}

class Typography extends React.Component<TypographyProps,TypographyState> {
  constructor(props: TypographyProps) {
    super(props);

    this.state = {
    }
  }

  render() {
      const {children,...rest}= this.props
    return (
      <MTypography {...rest}>
        {children}
      </MTypography>
    );
  }
}

const styles = (theme: Theme) => ({   
});
export default withStyles(styles) (Typography)