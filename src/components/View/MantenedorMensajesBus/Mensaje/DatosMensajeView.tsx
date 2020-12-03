import * as React from 'react';
import axios from 'axios';
import { appConf } from '../../../commons/appConf'
import Grid from '@material-ui/core/Grid';
import New from '@material-ui/icons/NoteAdd'


const apiGLobal = appConf.host + appConf.apiMantMensajes + "Mensaje/"


export interface DatosMensajeViewProps {
}

export interface DatosMensajeViewState {
}

export default class DatosMensajeView extends React.Component<DatosMensajeViewProps, DatosMensajeViewState> {
  constructor(props: DatosMensajeViewProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <div>
        
      </div>
    );
  }
}
