import * as React from 'react'

interface DraggableProps {
    id       : string
    children : React.ReactNode
    style    : any
}

interface DraggableState {
}

class Draggable extends React.Component<DraggableProps, DraggableState> {
  constructor(props: DraggableProps) {
    super(props);

    this.state = {
    }
  }
  drag = (e:React.DragEvent<HTMLDivElement>)=>{
      e.dataTransfer.setData('transfer',(e.target as HTMLDivElement).id)
  }

  noAllowDrop=(e:React.DragEvent<HTMLDivElement>)=>{
      e.stopPropagation()
  }
  render() {
      const {id,children,style}=this.props
    return (
      <div id={id} draggable={true} onDragStart={this.drag} onDragOver ={this.noAllowDrop}  style={style}>
        {children}
      </div>
    );
  }
}

export default Draggable