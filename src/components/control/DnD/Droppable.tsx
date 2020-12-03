import React from 'react';

interface DroppableProps {
    id       : string
    children : React.ReactNode
    style    : any
}

interface DroppableState {
}

class Droppable extends React.Component<DroppableProps, DroppableState> {
  constructor(props: DroppableProps) {
    super(props);

    this.state = {
    }
  }
//React.DragEvent<HTMLDivElement>
  drop =(e:any)=>{
      e.preventDefault()
      const data=e.dataTransfer.getData('transfer')
      
      e.target.appendChild(document.getElementById(data))
  }

  allowDrop=(e:React.DragEvent<HTMLDivElement>)=>{
    e.preventDefault()
  }

  render() {
      const {id,children,style}= this.props
    return (
      <div id={id} onDrop={this.drop} onDragOver={this.allowDrop} style={style}>
        {children}
      </div>
    );
  }
}

export default Droppable
