import React               from 'react'
import {withStyles, Theme} from '@material-ui/core/styles'

export interface DataGridProps {
}

export interface DataGridState {
}

class DataGrid extends React.Component<DataGridProps, DataGridState> {
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

const styles = (theme: Theme) => ({  
});
export default withStyles(styles) (DataGrid)