import * as React from 'react';

export interface WelComeProps {
}

export interface WelComeState {
}

export default class WelCome extends React.Component<WelComeProps,WelComeState> {
  render() {
    return (
      <div>
        <h1>Bienvenido</h1>
      </div>
    );
  }
}
