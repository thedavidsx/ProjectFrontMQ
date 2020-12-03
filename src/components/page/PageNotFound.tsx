import React from 'react'

export interface PageNotFoundProps {
}

export interface PageNotFoundState {
}

export default class PageNotFound extends React.Component<PageNotFoundProps, PageNotFoundState> {
  constructor(props: PageNotFoundProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <div>
        <h1>Not Found</h1>
      </div>
    );
  }
}
