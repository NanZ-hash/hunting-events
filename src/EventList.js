import React from 'react';
import Event from './Event.js'
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
        theEvent={()=>this.props.theEvent(event)} />
        
            <Add theEvent={()=>this.props.theEvent(event) }/>
        </div>
      });

    
return (  <div>
        <div className='div1'> 
        { allevents }
    
</div>


</div>
)
}
  }
