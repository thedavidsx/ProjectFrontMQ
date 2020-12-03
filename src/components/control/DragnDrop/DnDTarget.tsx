import React from 'react'
import {DropTarget,DropTargetMonitor,DropTargetConnector} from 'react-dnd'
import '../DragnDrop/DnDStyle.css'

interface DnDTargetProps {
  connectDropTarget : any
  hovered           : any
  item              : any
}

interface DnDTargetState {
}
function collect(connect : DropTargetConnector,monitor : DropTargetMonitor){
  return{
    connectDropTarget: connect.dropTarget(),
    hovered : monitor.isOver(),
    item    : monitor.getItem() 

  }
}

class DnDTarget extends React.Component<DnDTargetProps, DnDTargetState> {
  
  constructor(props: DnDTargetProps) {
    super(props);

    this.state = {
    }
  }

  render() {
    const {connectDropTarget,hovered,item} = this.props
    const backgroundColor = hovered ? 'lightgreen' : 'white'
    return connectDropTarget(
      <div className="target" style={{background:backgroundColor}}>
        Target
      </div>
    )

 
  }
}

export default DropTarget("DnD",{},collect)(DnDTarget)