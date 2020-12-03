import React               from 'react'
import MaterialTable       from 'material-table'
import {withStyles, Theme} from '@material-ui/core/styles'

export interface DataTableProps {
    title    : string
    columns  : any
    data     : any
    editable?: boolean
}

export interface DataTableState {
    columns : any
    data    : any
}

class DataTable extends React.Component<DataTableProps,DataTableState> {
  constructor(props: DataTableProps) {
    super(props);

    this.state = {
        columns:this.props.columns,
        data   :this.props.data
    }
  }

  Editable=(title:string,columns:any,data:any)=>{
    return (
        <MaterialTable title={title} columns={columns} data={data} 
                       options={{ exportButton: true  }}
                       editable={{
                           onRowAdd    : (newData: any) =>
                                          new Promise((resolve : any, reject:any) => {
                                              setTimeout(() => {
                                              {
                                                  const data = this.state.data;
                                                  data.push(newData);
                                                  this.setState({ data }, () => resolve());
                                              }
                                              resolve()
                                              }, 1000)
                                          }),
                           onRowUpdate : (newData: any,oldData: any)=>
                                          new Promise((resolve : any, reject:any) => {
                                              setTimeout(() => {
                                              {
                                                  const data = this.state.data;
                                                  const index = data.indexOf(oldData);
                                                  data[index] = newData;
                                                  this.setState({ data }, () => resolve());
                                              }
                                              resolve()
                                              }, 1000)
                                          }),                         
                           onRowDelete : (oldData: any)=>
                                          new Promise((resolve: any, reject:any) => {
                                              setTimeout(() => {
                                              {
                                                  let data = this.state.data;
                                                  const index = data.indexOf(oldData);
                                                  data.splice(index, 1);
                                                  this.setState({ data }, () => resolve());
                                              }
                                              resolve()
                                              }, 1000)
                                          })                         
                      }}
        />
          
      )  
  }

  NoEditable=(title:string,columns:any,data:any)=>{
    return (
        <MaterialTable title={title} columns={columns} data={data} 
                       options={{ exportButton: true  }}
                       
        />
          
      )   
  }

  render() {
      const {title,editable} = this.props
      const {columns,data}= this.state
    return (        
        editable?this.Editable(title,columns,data):this.NoEditable(title,columns,data)
        );
  }
}
const styles = (theme: Theme )=> ({
});

export default withStyles(styles) (DataTable)