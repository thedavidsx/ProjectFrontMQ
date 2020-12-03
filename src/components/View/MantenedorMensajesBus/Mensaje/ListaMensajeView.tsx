import * as React from 'react';
import { connect } from 'react-redux'
import axios from 'axios';
import { DataTableMUI } from '../../../commons/Sonda.React.Control'


export interface ListaMensajeViewViewProps {
}

export interface ListaMensajeViewViewState {
  data: Array<any>
  columns: Array<string>
  options: opList
}

interface opList {
  filter: boolean;
  print: boolean;
  download: boolean;
  selectableRows: boolean;
  textLabels: optextLabels;
}

interface optextLabels {
  body: optextLabelsbody;
}


interface optextLabelsbody {
  noMatch: string;
}


export default class ListaMensajeViewView extends React.Component<ListaMensajeViewViewProps, ListaMensajeViewViewState> {
  constructor(props: ListaMensajeViewViewProps) {
    super(props);
    this.loadData = this.loadData.bind(this);

    this.state = {
      data: [],
      columns: ["Mensaje", "Fecha Envio"],
      options: {
        filter: false,
        print: false,
        download: false,
        selectableRows: false,
        textLabels: {
          body: {
            noMatch: "No se encontraron datos"
          }
        }
      }
    }
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    axios.get('http://localhost/MantenedorBusMensaje/api/Mensaje')
      .then((res: any) => {
        const data: Array<any> = [];
        let ds = [];
        res.data.map((row: any) => {
          ds = [];
          ds.push(row.mensaje, row.fecha_envio);
          data.push(ds)
        });
        this.setState({ data });
      })
  }

  public render() {
    return (
      <div>
        <DataTableMUI
          id="TableCanal"
          data={this.state.data}
          columns={this.state.columns}
          options={this.state.options}
          tittle="Lista Canal"
        />
      </div>
    );
  }
}
