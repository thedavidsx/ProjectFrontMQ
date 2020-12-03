import * as React from 'react';
import { connect } from 'react-redux'
import axios from 'axios';
import {appConf} from '../../../commons/appConf'
import { DataTableMUI } from '../../../commons/Sonda.React.Control'
import tabChange from '../../../../redux/actions/tabChange'
import actionsCodAplicacion from '../../../../redux/actions/actionsCodAplicacion'

const apiGLobal = appConf.host + appConf.apiMantMensajes + "Aplicacion"

export interface AplicacionListaViewProps {
    reduxTab: any
    tabChange: any
    actionsCodAplicacion? : any
}

interface opColunm {
    name : string,
    options : opColunmSetting
}

interface opColunmSetting{
    display : boolean
}

interface opList {
    filter: boolean;
    print: boolean;
    download: boolean;
    selectableRows: boolean;
    textLabels: optextLabels;
    selectedRows: opselectedRows;
    onRowClick: any;
}

interface optextLabels {
    body: optextLabelsbody;
}

interface optextLabelsbody {
    noMatch: string;
}

interface opselectedRows {
    text: string;
}

export interface AplicacionListaViewState {
    data: Array<any>
    columns: any
    options: opList
}

export  class AplicacionListaView extends React.Component<AplicacionListaViewProps, AplicacionListaViewState> {
    constructor(props: AplicacionListaViewProps) {
    super(props);
    this.loadData = this.loadData.bind(this);

    }
    state = {
        data: [],
        columns: [
            {name : "id_not_aplicacion",options:{display:false}},
            {name : "Codigo",options:{display:true}},
            { name : "Descripcion",options:{display:true}}
        ],
        options: {
            filter: false,
            print: false,
            download: false,
            selectableRows: false,
            textLabels: {
                body: {
                    noMatch: "No se encontraron datos"
                }
            },
            selectedRows: {
                text: "row(s) selected"
            },
            onRowClick: (action: any) => {
                console.log(action);
                this.props.actionsCodAplicacion(action[0]);
                
                this.props.tabChange(1);
            }
        }
    }

    componentDidMount() {
        this.loadData();
    }


    loadData() {
        axios.get(apiGLobal)
            .then((res: any) => {
                const data: Array<any> = [];
                let ds = [];
                res.data.map((row: any) => {
                    ds = [];
                    ds.push(row.id_not_aplicacion,row.codigo, row.descripcion);
                    data.push(ds)
                });
                this.setState({ data });
            }
        );
    }

  public render() {
    return (
        <div>
            <DataTableMUI
                id="TableAplicacion"
                data={this.state.data}
                columns={this.state.columns}
                options={this.state.options}
                tittle="Lista Aplicacion"
            />
        </div>
    );
  }
}

const mapStateToProps = (state: any) => {
    return {
        reduxTab: state.reduxTab,
        reducerCodCanal: state.reducerCodCanal
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        tabChange: (value: number) => dispatch(tabChange(value)),
        actionsCodAplicacion: (value: string) => dispatch(actionsCodAplicacion(value))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AplicacionListaView)
