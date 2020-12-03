import React from 'react'
import Draggable from './Draggable'
import Droppable from './Droppable'
import styled    from 'styled-components'
import Typography from '@material-ui/core/Typography'
import {withStyles, Theme} from '@material-ui/core/styles'



const Wrapper = styled.div`
    width           : 100%;
    padding         : 1px;
    display         : flex;
    justify-content : center;
    `
    const Item = styled.div`
    padding         : 8px;
    color           : #555;
    background-color: white;
    border-radius   : 3px;
    `
    const droppableStyle = {
    backgroundColor : '#555',
    width           : '250px',
    height          : '400px', 
    margin          : '5px'
    }

    /*
    250px
    400px
    */
interface DnDAssociateProps {
  items:any
}

interface DnDAssociateState {
}

class DnDAssociate extends React.Component<DnDAssociateProps, DnDAssociateState> {
  constructor(props: DnDAssociateProps) {
    super(props);

    this.state = {
    }
  }

  
  render() {
    const {items}= this.props
    return (
      <Wrapper>
        <Droppable id="drSource" style={droppableStyle}>
          {
            items.map((x:any,k:number)=><Draggable key={x.id} id={x.id} style={{ margin: '8px' }} ><Item>{x.text}</Item></Draggable>)
          }
        </Droppable>
        <Droppable id="drTarget" style={droppableStyle}>

        </Droppable>
      </Wrapper>

    );
  }
}
const styles = (theme: Theme )=> ({    
});
 
export default withStyles(styles) (DnDAssociate)
