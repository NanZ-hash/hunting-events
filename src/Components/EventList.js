import React from 'react';
import Event from './Event'
import Add from './Add' ;

export default class EventList extends React.Component {

  render ()  
  { 

    const allevents = this.props.event.map((event)=>{
        return <div> < Event 
        eventName={event.name} 
        key={event.id}
        questRank={event.requirements} 
        des={event.description}
        target={event.successConditions}
        location={event.location.name}
        start={event.startTimestamp}
        end={event.endTimestamp}
        handleDetailsClick={()=>this.props.handleDetailsClick(event)}
        />
        
        <Add theEvent={()=>this.props.theEvent(event) }/>
        </div>
      });

    
return (  <div>
       
        { allevents }
    



</div>
)
}
  }
