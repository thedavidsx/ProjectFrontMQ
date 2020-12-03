import * as React from 'react';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Tabs , TabContainer, GridItem , GridContainer }  from '../../../commons/Sonda.React.Control'
import Lista from '../Mensaje/ListaMensajeView'
import Datos from '../Mensaje/DatosMensajeView'

export interface MensajeViewProps {
}

export interface MensajeViewState {
}

export default class MensajeView extends React.Component<MensajeViewProps, MensajeViewState> {
    constructor(props: MensajeViewProps) {
        super(props);

        this.state = {
        }
    }

    public render() {
        return (
            <div>
                <Grid item xs={12}>
                    <Tabs id="tab_mensajeView" color={"primary"}>
                        <TabContainer title="Lista">
                            <Lista></Lista>
                        </TabContainer>
                        <TabContainer title="Detalle">
                            <Datos></Datos>
                        </TabContainer>
                    </Tabs>
                </Grid>
            </div>
        );
    }
}
