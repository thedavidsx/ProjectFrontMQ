import React             from 'react'                 
import HTML5Backend      from 'react-dnd-html5-backend'
import {DragDropContext} from 'react-dnd'
import DnDSource         from '../DragnDrop/DnDSource'
import DnDTarget         from './DnDTarget'
import {GridContainer,GridItem} from './../../commons/Sonda.React.Control'
import '../DragnDrop/DnDStyle.css'

interface DnDContextProps {
}

interface DnDContextState {
  items:Array<{id:number,name:string}>
}

class DnDContext extends React.Component<DnDContextProps, DnDContextState> {
  
  constructor(props: DnDContextProps) {
    super(props);

    this.state = {
      items : [
        {id:1, name:'item 1'},
        {id:2, name:'item 2'},
        {id:3, name:'item 3'},
        {id:4, name:'item 4'}
      ]
    }
  }

deleteItem=(id:number)=>{
  console.log("deliting")
  this.setState(prevState=>{ 
    let items=prevState.items
    const index = items.findIndex(item=>item.id===id)

    items.splice( index,1)
    return {items}
  })
}
  render() {
    return (
      <GridContainer >
        <GridItem xd={6}>
        <div className="item-container" >
          {
            this.state.items.map((x: any, k: number) => (
              <DnDSource key={x.id} item={x} handleDrop={() => this.deleteItem(x.id)} />
            ))
          }
          </div>
        </GridItem>
        <GridItem xd={6}>
          <DnDTarget />
        </GridItem>
      </GridContainer>
    );
  }
}

export default DragDropContext(HTML5Backend)(DnDContext)
