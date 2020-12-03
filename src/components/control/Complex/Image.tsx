import React               from 'react'
import {withStyles, Theme} from '@material-ui/core/styles'

export interface ImageProps {
}

export interface ImageState {
}

class Image extends React.Component<ImageProps, ImageState> {
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

const styles = (theme: Theme) => ({  
});
export default withStyles(styles) (Image)