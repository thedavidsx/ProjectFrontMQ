import * as React from 'react';
import { connect } from 'react-redux'
import axios from 'axios';
import { appConf } from '../../../commons/appConf'
import { DataTableMUI, Panel, GridContainer, GridItem } from '../../../commons/Sonda.React.Control'
import tabChange from '../../../../redux/actions/tabChange'
import actionsCodCanal from '../../../../redux/actions/actionsCodCanal'
import { AnyAaaaRecord } from 'dns';


const apiGLobal = appConf.host + appConf.apiMantMensajes + "Canal"

export interface ListaCanalViewProps {
    reduxTab: any
    tabChange: any
    actionsCodCanal?: any
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

export interface ListaCanalViewState {
    data: Array<any>
    columns: Array<string>
    options: opList
    tabChageIndex: any
}

class ListaCanalView extends React.Component<ListaCanalViewProps, ListaCanalViewState> {
    constructor(props: ListaCanalViewProps) {
        super(props);
        this.loadData = this.loadData.bind(this);
    }
    state = {
        tabChageIndex: 0,
        data: [],
        columns: ["Canal", "Url", "Formato"],
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
                this.props.actionsCodCanal(action[0]);
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
                    ds.push(row.codigo_not_canal, row.url, row.formato);
                    data.push(ds)
                });
                this.setState({ data });
            }
            );
    }


    public render() {
        const { reduxTab } = this.props;
        return (
            <GridContainer>
                <GridItem lg={12}>
                    <DataTableMUI
                        id="TableCanal"
                        data={this.state.data}
                        columns={this.state.columns}
                        options={this.state.options}
                        tittle="Lista Canal"
                    />
                </GridItem>
            </GridContainer>
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
        actionsCodCanal: (value: string) => dispatch(actionsCodCanal(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListaCanalView)
