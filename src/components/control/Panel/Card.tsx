import React           from 'react';
import MCard           from '@material-ui/core/Card'
import MCardHeader     from '@material-ui/core/CardHeader'
import MCardMedia      from '@material-ui/core/CardMedia'
import MCardContent    from '@material-ui/core/CardContent'
import MCardActions    from '@material-ui/core/CardActions'
import MCardActionArea from '@material-ui/core/CardActionArea'
import { Theme, withStyles } from '@material-ui/core';

export interface CardProps {
    id        : string
    classes?  : any
    children? : any
}
export interface CardHeaderProps {
    avatar?    : any
    action?    : any
    title?     : string
    subheader? : string
}
export interface CardMediaProps {
    classes?   : any
    image?     : any
    title?     : string
}
export interface CardContentProps {
    children   : any
}
export interface CardActionsProps {
    classes?   : any
    children?  : any
    disableactionspacing? : boolean
}
export interface CardActionAreaProps {
    children?  : any
}

export interface CardState {
}

class Card extends React.Component<CardProps, CardState> {
  render() {
      const {id,classes,children}:CardProps= this.props
    return (
      <MCard id={id} className={classes.card}>
        {children}
      </MCard>
    );
  }
}
export const CardHeader=(props:CardHeaderProps)=>{
    const {avatar,action,title,subheader} : CardHeaderProps = props  
    return (
      <MCardHeader avatar={avatar} action={action} title={title} subheader={subheader}/>
    );
}
export const CardMedia=(props:CardMediaProps)=>{
    const {classes,image,title} : CardMediaProps = props  
    return (
      <MCardMedia classes={classes.media} image={image} title={title} />
    );
}
export const CardContent=(props:CardContentProps)=>{
    const {children} : CardContentProps = props  
    return (
      <MCardContent>{children}</MCardContent> 
    );
}
export const CardActions=(props:CardActionsProps)=>{
    const {classes,children,disableactionspacing} : CardActionsProps = props  
    return (
      <MCardActions classes={classes.actions} disableActionSpacing={disableactionspacing} >{children}</MCardActions>
    );
}
export const CardActionArea=(props:CardActionAreaProps)=>{
    const {children} : CardActionAreaProps = props  
    return (
      <MCardActionArea>{children}</MCardActionArea>
    );
}


const styles = (theme: Theme) => ({
    card      : { maxWidth: 400 },
    media     : { height: 0, paddingTop: '56.25%' },
    actions   : { display: 'flex' }
});

export default withStyles(styles) (Card)