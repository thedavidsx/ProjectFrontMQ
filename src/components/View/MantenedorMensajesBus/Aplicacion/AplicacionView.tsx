import * as React from 'react';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Tabs, TabContainer, GridContainer, GridItem, Panel } from '../../../commons/Sonda.React.Control'
import Lista from '../Aplicacion/AplicacionListaView'
import Datos from '../Aplicacion/AplicacionDatosView'

export interface AplicacionProps {
}

export interface AplicacionState {
}

export default class Aplicacion extends React.Component<AplicacionProps, AplicacionState> {
  constructor(props: AplicacionProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <GridContainer>
        <Panel>
          <GridItem xs={12}>
            <Tabs id="tab_aplicacionView" color={"primary"}>
              <TabContainer title="Lista">
                <Lista></Lista>
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
