import React   from 'react'
import Header  from '../page/Header'
import Content from '../page/Content'
import Menu    from '../page/Menu'
import Footer  from '../page/Footer'

export interface MainProps {
}

export interface MainState {
  open : boolean
}


export default class Main extends React.Component<MainProps,MainState> {
  constructor(props: MainProps) {
    super(props);
    this.state = {open:false}
    this.menuOpen  = this.menuOpen.bind(this)
    this.menuClose = this.menuClose.bind(this)
  }

  menuOpen=()=>{
    this.setState({open:!this.state.open})
  }
  menuClose=()=>{
    this.setState({open:false})
  }
  public render() {
    return (      
      <div style={{ backgroundColor:'#eeeeee', height:'100vh' }} >
        <Header open={this.state.open} menuOpen={this.menuOpen}/>
        <Menu   open={this.state.open} menuClose={this.menuClose}/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}
