import React from 'react'
import { Router, Route, Link } from 'react-router'

require('./card.css')

export const Cards=({...props})=>{
return(
   <div className="card" style={props.style}>
   <Link to={`/courses/${props.id}`}>
    <div className="image">
      <img src={props.imgLink}  />
    </div>
    </Link>
    <div className="content">
      <div className="header">{props.courseName}</div>
      <div className="meta">
        Added By : {props.adderName}
      </div>
      <div className="description">
      </div>
    </div>
  </div>
	)
}

export const StreamsCard=({title,description,members,id,...props})=>(
  
  <div className="ui card">
  <Link className="content" to={`/task/${id}`}>
    <div className="header">{title}</div>
    <div className="description">
      <p>{description}</p>
    </div>
    <div className="meta">{`Total Numbers ${members}`}</div>
  </Link>
</div>
)

export const AddStreamsCard=({onPopupOpenClick,...props})=>(
  <div className="ui card">
  <div className="content simpalcard addStream" onClick={onPopupOpenClick}>
    <div>
     <div style={{padding: '0 30px'}}><img src={'../../../dist/images/add.png'}  width='40px' /></div>
      <div className="newProj">Create New Project</div>
    </div>
  </div>
</div>
)

export const CardList=({cards,onPopupOpenClick,style,lasttile,...props})=>{
  return(<div className="contentWrapper">
    <div className="ui links cards">
        {
          cards.length>0?cards.map((card,i)=>{
            return <StreamsCard key={i} style={props.cardInnerStyle} propskey={i} {...card}/>
          }):[]
        }
        <AddStreamsCard  onPopupOpenClick={onPopupOpenClick}/>
    </div>
    </div>
    )
}

