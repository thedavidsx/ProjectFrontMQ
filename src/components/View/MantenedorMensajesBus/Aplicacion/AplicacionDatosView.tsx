import * as React from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { appConf } from '../../../commons/appConf'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Save from '@material-ui/icons/Save'
import Delete from '@material-ui/icons/DeleteForever'
import New from '@material-ui/icons/NoteAdd'
import Paper from '@material-ui/core/Paper';
import { Button , TextField }  from '../../../commons/Sonda.React.Control'
import actionsCodAplicacion from '../../../../redux/actions/actionsCodAplicacion'

const apiGLobal = appConf.host + appConf.apiMantMensajes + "Aplicacion/"

export interface AplicacionDatosViewProps {
    reducerCodAplicacion?: any
    actionsCodAplicacion?: any
}

export interface AplicacionDatosViewState {
    _cod_not_aplicacion: string,
    _codigo: string,
    _descripcion: string,
    _obligatorio: string,
    _actualizar: boolean
}

export class AplicacionDatosView extends React.Component<AplicacionDatosViewProps, AplicacionDatosViewState> {
    constructor(props: AplicacionDatosViewProps) {
        super(props);
        this.SaveData = this.SaveData.bind(this);
        this.DeleteData = this.DeleteData.bind(this);
        this.newData = this.newData.bind(this);
        this.loadData = this.loadData.bind(this);

        this.state = {
            _cod_not_aplicacion: "",
            _codigo: "",
            _descripcion: "",
            _obligatorio: "",
            _actualizar: false
        }
    }

    componentWillMount() {
        this.setState({ _cod_not_aplicacion: this.props.reducerCodAplicacion });
    }

    componentDidMount() {
        this.setState({ _actualizar: (this.state._cod_not_aplicacion == "" ? false : true) });
        if (this.state._cod_not_aplicacion != "") {
            this.loadData();
        }
    }

    handleChange = (name : string) => (event:React.ChangeEvent<HTMLInputElement>)=> {
        this.setState({...this.state,[name]: event.target.value})
    };

    handleBlur = (obj: any) => (event: { target: { value: string; }; }) => {
        if (event.target.value != "") {
            this.loadData();
        } else {
            this.newData();
        }
    }

    loadData() {
        axios
        .get(apiGLobal + this.state._cod_not_aplicacion)
        .then((res: any) => {
            if(res.data[0] != null){
                this.setState({ _codigo: res.data[0].codigo });
                this.setState({ _descripcion: res.data[0].descripcion });
                this.setState({ _obligatorio: res.data[0].obligatorio });
                this.setState({ _actualizar: true });
            }
        });
    }

    SaveData() {
        let data = {
            codigo_not_aplicacion: this.state._cod_not_aplicacion,
            codigo: this.state._codigo,
            descripcion: this.state._descripcion,
            obligatorio: this.state._obligatorio
        }
        if (!this.state._actualizar) {
            axios
            .post(apiGLobal, data)
            .then((res: any) => {
                console.log(res.data.reasonPhrase);
                this.setState({ _actualizar: true });
                alert("Registro guardado con éxito!");
            });
        } else {
            axios
            .put(apiGLobal + this.state._cod_not_aplicacion, data)
            .then((res: any) => {
                this.setState({ _cod_not_aplicacion: res.data.reasonPhrase });
                this.setState({ _actualizar: true });
                alert("Registro actalizado con éxito!");
            });
        }
    }
    DeleteData() {
        axios
        .delete(apiGLobal + this.state._cod_not_aplicacion)
        .then((res: any) => {
            console.log(res.data.reasonPhrase);
            alert("Registro eliminado con éxito!");
            this.newData();
        });
        //console.log(this.state);
    }
    newData() {
        this.setState({ _cod_not_aplicacion: "" });
        this.setState({ _codigo: "" });
        this.setState({ _descripcion: "" });
        this.setState({ _obligatorio: "" });
        this.setState({ _actualizar: false });
    }
    public render() {
        return (
            <div>
                <Grid container spacing={16} justify={"center"} alignItems={"center"} item lg={12}>

                    <Grid container spacing={0} justify={"flex-end"} alignItems={"flex-end"} item xs={12}>
                        <Grid item sm={2} justify={"flex-end"} container={true}>
                            <Button id="new_canal" variant={"outlined"} color="primary" onClick={this.newData}>
                                <span>Nuevo</span>
                                &nbsp;&nbsp;&nbsp;<New /></Button>
                        </Grid>
                        <Grid item sm={2} justify={"flex-end"} container={true}>
                            <Button id="save_canal" variant={"outlined"} color="primary" onClick={this.SaveData}>
                                <span>Guardar</span>
                                &nbsp;&nbsp;&nbsp;<Save /></Button>
                        </Grid>
                        <Grid item sm={2} container={true} justify={"flex-end"}>
                            <Button id="delete_canal" variant={"outlined"} color="primary" onClick={this.DeleteData}>
                                <span>Eliminar</span>
                                &nbsp;&nbsp;&nbsp;<Delete /></Button>
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="codigo"
                            placeholder="Codigo Aplicacion"
                            onChange={this.handleChange('codigo')}
                            // onblur={this.handleBlur(this)}
                            disabled={this.state._actualizar}
                            value={this.state._codigo}
                        >
                        </TextField>
                    </Grid>

                    <Grid item xs={6}>
                        <TextField id="descripcion" placeholder="Descripcion Aplicacion" onChange={this.handleChange('descripcion')} value={this.state._descripcion}></TextField>
                    </Grid>

                    <Grid item xs={6}>
                        <TextField id="obligatorio" placeholder="Obligatorio" onChange={this.handleChange('obligatorio')} value={this.state._obligatorio}></TextField>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
const mapStateToProps = (state: any) => {
    return {
        reducerCodAplicacion: state.reducerCodAplicacion
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        actionsCodAplicacionl: (value: string) => dispatch(actionsCodAplicacion(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AplicacionDatosView)