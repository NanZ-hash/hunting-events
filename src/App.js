import React from 'react';
import EventList from './EventList.js'
import Add from './Add'
import MHW from './TestdB.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserEvents from './UserEvents' 



export default class App extends React.Component { 
  constructor (props)  { 
    super (props); 

    this.state ={
      events : MHW.events, 
      UserEvents:[], 
      current :{ },
  }
 

}


  
  handleEvent = (event) => { 
    const UserEvents = [...this.state.UserEvents] ;
    const eventIndex = UserEvents.indexOf(event); 
   
    
      UserEvents.push(event)
      console.log (`addind ${ event.name } to the UserEvents`)
    
   
    this.setState({ UserEvents }) // call for the change to happen . . .
    console.log(UserEvents)
 
  
  }


  render ()  { 

return <div>
  <EventList  
  theEvent={this.handleEvent}
  event={this.state.events} 
  userEvents={this.state.UserEvents}
  />

  < UserEvents 
  event={this.state.events} 
  userEvents={this.state.UserEvents}/>

</div>

  }
}