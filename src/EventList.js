import React from 'react';
import Event from './Event.js'
import UserEvents from './UserEvents' 

export default class EventList extends React.Component { 



  render ()  { 

    const allevents = this.props.event.map(function (event){
        return < Event eventName={event.name} 
        key={event.id}
        questRank={event.requirements} 
        des={event.description}
        target={event.successConditions}
        location={event.location.name}
        start={event.startTimestamp}
        end={event.endTimestamp}

        />;
      });

return (  <div className='eventList'>

  <UserEvents /> 

{ allevents }

</div>
)





  }
}