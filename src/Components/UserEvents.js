import React from 'react';
import Event from './Event'
import Edit from './Edit'
import Remove from './Remove'
 // New 

export default class UserEvents extends React.Component { 


  render ()  { 


    const allevents = this.props.userEvents.map((event)=>{
      return <div> < Event 
      eventName={event.name} 
      key={event.id}
      questRank={event.requirements} 
      des={event.description}
      target={event.successConditions}
      location={event.location.name}
      start={event.startTimestamp}
      end={event.endTimestamp}
      removeEvent={()=>this.props.removeEvent(event) } />
      // Notes Here 
      <Edit editEvent={()=>this.props.editEvent(event) }/>
      <Remove removeEvent={()=>this.props.removeEvent(event) }
      removeAllEvents={()=>this.props.removeAllEvents(event)}/>

      </div> 
    });

  //setting time propryty from the timestamp .. 
// Quset tim start..
  const timeStart = new Date(this.props.start)
  const questStart= `${timeStart.getFullYear()} / ${timeStart.getMonth()} / ${timeStart.getDay()}`
// Quest time End.. 
  const timeEnd = new Date(this.props.end)
  const questEnd= `${timeEnd.getFullYear()} / ${timeEnd.getMonth()} / ${timeEnd.getDay()}`



  return   ( 

    <div className =' div2 '> 
    {allevents}
  
    </div>
    )
    
      }
    }