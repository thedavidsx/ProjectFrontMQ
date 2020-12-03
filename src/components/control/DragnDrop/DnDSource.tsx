import React             from 'react'
import {DragSource,ConnectDragSource,DragSourceMonitor, DragSourceConnector}      from 'react-dnd'
import {Paper}           from './../../commons/Sonda.React.Control'
import '../DragnDrop/DnDStyle.css'

interface DnDSourceProps {
  isDragging?        : boolean
  connectDragSource  : ConnectDragSource
  item               : any
  handleDrop?        : any

}

interface DnDSourceState {
}

const itemSource = {
  beginDrag(props:DnDSourceProps){
    return props.item
  },
  endDrag(props:DnDSourceProps,monitor:DragSourceMonitor,component:any){
    if (!monitor.didDrop()){
      return
    }

    return props.handleDrop(props.item.id)
  }
}

function collect(connect:DragSourceConnector,monitor:DragSourceMonitor){
  return{
    connectDragSource  : connect.dragSource(),
    connectDragPreview : connect.dragPreview(),
    isDragging         : monitor.isDragging()
  }
}

class DnDSource extends React.Component<DnDSourceProps, DnDSourceState> {
  
  constructor(props: DnDSourceProps) {
    super(props);

    this.state = {
    }
  }

  render() {
    const {isDragging, connectDragSource, item} = this.props
    const opacity = isDragging? 0 : 1
    return connectDragSource(
      <div style={{opacity}}>        
          <Paper>{item.name}</Paper>
      </div>
    );
  }
}

export default DragSource("DnD",itemSource,collect)(DnDSource)
