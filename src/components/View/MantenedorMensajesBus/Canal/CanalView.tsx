import * as React from 'react';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Tabs, TabContainer, GridContainer, GridItem, Panel } from '../../../commons/Sonda.React.Control'
import Lista from '../Canal/ListaCanalView'
import Datos from '../Canal/DatosView'

export interface CanalViewProps {
}

export interface CanalViewState {
    value: any

}

export default class CanalView extends React.Component<CanalViewProps, CanalViewState> {
    constructor(props: CanalViewProps) {
        super(props);

    }

    state = {
        value: 0
    }

    handleChange = () => {
        this.setState({ value: 1 })
    }

    public render() {
        const { value } = this.state
        return (
            <GridContainer>
                <Panel>
                    <GridItem xs={12}>

                        <Tabs id="tab_CanalView" color={"primary"}>
                            <TabContainer title="Lista">
                                <Lista ></Lista>
                            </TabContainer>
                            <TabContainer title="Detalle">
                                <Datos></Datos>
                            </TabContainer>
                        </Tabs>
                    </GridItem>
                </Panel>

            </GridContainer>
        );
    }
}
