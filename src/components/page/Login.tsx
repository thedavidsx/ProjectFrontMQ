import React from 'react'

export interface LoginProps {
}

export interface LoginState {
}

export default class Login extends React.Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <div>
        <h1>Login</h1>
      </div>
    );
  }
}
