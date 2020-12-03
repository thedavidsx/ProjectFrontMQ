import React               from 'react'
import {withStyles, Theme} from '@material-ui/core/styles'

export interface ColorPickerProps {
}

export interface ColorPickerState {
}

class ColorPicker extends React.Component<ColorPickerProps, ColorPickerState> {
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

const styles = (theme: Theme) => ({  
});
export default withStyles(styles) (ColorPicker)