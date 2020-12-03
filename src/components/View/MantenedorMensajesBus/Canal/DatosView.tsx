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
import {Button , TextField,Panel, GridContainer, GridItem ,SelectFieldAutocomplete,SelectField}   from '../../../commons/Sonda.React.Control'
import actionsCodCanal from '../../../../redux/actions/actionsCodCanal'

const apiGLobal = appConf.host + appConf.apiMantMensajes + "Canal/"

export interface DatosCanalViewProps {
    reducerCodCanal?: any
    actionsCodCanal?: any
}

export interface DatosCanalViewState {
    _codigo_not_canal: string
    _url: string,
    _max_reintentos: string,
    _tiempo_reintentos: string,
    _canal_obligatorio: string,
    _formato: string,
    _actualizar: boolean,
    _selecto : string
}

const datas = [
    {key:0 , value : "Seleccione" ,label : "Seleccione"},
    {key:1 ,value : "Pepito" ,label : "Pepito"},
    {key:2 ,value : "Jose" , label : "Jose"}
]

export class DatosCanalView extends React.Component<DatosCanalViewProps, DatosCanalViewState> {
    constructor(props: DatosCanalViewProps) {
        super(props);
        this.SaveData = this.SaveData.bind(this);
        this.DeleteData = this.DeleteData.bind(this);
        this.newData = this.newData.bind(this);
        this.loadData = this.loadData.bind(this);
        this.state = {
            _codigo_not_canal: "",
            _url: "",
            _max_reintentos: "",
            _tiempo_reintentos: "",
            _canal_obligatorio: "",
            _selecto : "",
            _formato: "",
            _actualizar: false
        }
    }
    componentWillMount() {
        this.setState({ _codigo_not_canal: this.props.reducerCodCanal });
    }
    componentDidMount() {
        this.setState({ _actualizar: (this.state._codigo_not_canal == "" ? false : true) });
        if (this.state._codigo_not_canal != "") {
            this.loadData();
        }
    }
    // handleChange = (obj: any) => (event: { target: { id: string; value: string; }; }) => {
    //     if (event.target.id == "codigo_not_canal") {
    //         this.setState({ _codigo_not_canal: event.target.value });
    //     } else if (event.target.id == "url") {
    //         this.setState({ _url: event.target.value });
    //     } else if (event.target.id == "max_reintentos") {
    //         this.setState({ _max_reintentos: event.target.value });
    //     } else if (event.target.id == "tiempo_reintentos") {
    //         this.setState({ _tiempo_reintentos: event.target.value });
    //     } else if (event.target.id == "canal_obligatorio") {
    //         this.setState({ _canal_obligatorio: event.target.value });
    //     } else if (event.target.id == "formato") {
    //         this.setState({ _formato: event.target.value });
    //     }
    // };

    // handleChange = (name : string) => (event:React.ChangeEvent<HTMLSelectElement>)=> {
    //     this.setState({...this.state,[name]: event.target.value},() => console.log(event.target.value))
    // };


    handleChange = (name : string) => (event:any | HTMLInputElement)=> { 
        //this.setState({...this.state,[name]: event.value ? undefined : event.target.value})
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
        .get(apiGLobal + this.state._codigo_not_canal)
        .then((res: any) => {
            if(res.data[0] != null){
                this.setState({ _url: res.data[0].url });
                this.setState({ _max_reintentos: res.data[0].max_reintentos });
                this.setState({ _tiempo_reintentos: res.data[0].tiempo_reintentos });
                this.setState({ _canal_obligatorio: res.data[0].canal_obligatorio });
                this.setState({ _formato: res.data[0].formato });
                this.setState({ _actualizar: true });
            }
        });
    }
    SaveData() {
        let data = {
            codigo_not_canal: this.state._codigo_not_canal,
            url: this.state._url,
            max_reintentos: this.state._max_reintentos,
            tiempo_reintentos: this.state._tiempo_reintentos,
            canal_obligatorio: this.state._canal_obligatorio,
            formato: this.state._formato
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
            .put(apiGLobal + this.state._codigo_not_canal, data)
            .then((res: any) => {
                console.log(res.data.reasonPhrase);
                this.setState({ _actualizar: true });
                alert("Registro actalizado con éxito!");
            });
        }
    }
    DeleteData() {
        axios
        .delete(apiGLobal + this.state._codigo_not_canal)
        .then((res: any) => {
            console.log(res.data.reasonPhrase);
            alert("Registro eliminado con éxito!");
            this.newData();
        });
        //console.log(this.state);
    }
    newData() {
        this.setState({ _codigo_not_canal: "" });
        this.setState({ _url: "" });
        this.setState({ _max_reintentos: "" });
        this.setState({ _tiempo_reintentos: "" });
        this.setState({ _canal_obligatorio: "" });
        this.setState({ _formato: "" });
        this.setState({ _actualizar: false });
    }
    public render() {
        const { reducerCodCanal }: DatosCanalViewProps = this.props
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
                            id="codigo_not_canal"
                            name="codigo_not_canal"
                            placeholder="Codigo Canal"
                            onChange={this.handleChange('_codigo_not_canal')}
                            onBlur={this.handleBlur(this)}
                            disabled={this.state._actualizar}
                            value={this.state._codigo_not_canal}
                        >
                        </TextField>
                    </Grid>

                    <Grid item xs={3}>
                        <TextField id="url" placeholder="Url Canal" onChange={this.handleChange('url')} value={this.state._url}></TextField>
                    </Grid>

                    <Grid item xs={9}>
                        <TextField id="formato" placeholder="Formato" onChange={this.handleChange('formato')} value={this.state._formato}></TextField>
                    </Grid>

                    <Grid item xs={3}>
                        <TextField id="max_reintentos" placeholder="Max reintentos" onChange={this.handleChange('max_reintentos')} value={this.state._max_reintentos}></TextField>
                    </Grid>

                    <Grid item xs={4}>
                        <TextField id="tiempo_reintentos" placeholder="Tiempo reintentos" onChange={this.handleChange('tiempo_reintentos')} value={this.state._tiempo_reintentos}></TextField>
                    </Grid>

                    <Grid item xs={5}>
                        <TextField id="canal_obligatorio" placeholder="Canal obligatorio" onChange={this.handleChange('canal_obligatorio')} value={this.state._canal_obligatorio}></TextField>
                    </Grid>

                    <Grid item xs={12}>
     
                        <SelectField
                            fullWidth
                            name = "selecto"
                            id = "selecto"
                            value = {this.state._selecto}
                            onChange = {this.handleChange('_selecto')}
                            label = "Prueba Select"
                            dataSource = {datas}                        
                        />


                    </Grid>

                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        reducerCodCanal: state.reducerCodCanal
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        actionsCodCanal: (value: string) => dispatch(actionsCodCanal(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DatosCanalView)