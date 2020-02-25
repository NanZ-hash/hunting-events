import React from 'react';
import EventList from './Components/EventList'
import MHW from './TestdB.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserEvents from './Components/UserEvents' 



export default class App extends React.Component { 
  constructor (props)  { 
    super (props); 

    this.state ={
      events : MHW.events, 
      UserEvents:[], 
      current :{ },
  }
 

}


  
  handleAddEvent = (event) => { 
    const UserEvents = [...this.state.UserEvents] ;
      UserEvents.push(event)
      console.log (`addind ${ event.name } to the UserEvents`)
    this.setState({ UserEvents }) // call for the change to happen . . .
    console.log(UserEvents) 
  }



handleRemoveEvent = (event) => {
  const UserEvents = [...this.state.UserEvents]
  // if statmnet if there is somthing selected or remove it all at once ... 
  UserEvents.pop(event);
  console.log (`Removing ${ event.name } from UserEvents `) 
  this.setState({ UserEvents }) // call for the change to happen . . .
  console.log(UserEvents) 
}



handleRemoveAllEvent = (event) => {
  let UserEvents = [...this.state.UserEvents]
  UserEvents = []
  console.log (`Removing All from UserEvents `) 
  this.setState({ UserEvents }) // call for the change to happen . . .
  console.log(UserEvents) 
}



  render ()  { 

return <div>
  <EventList  
  theEvent={this.handleAddEvent}
  event={this.state.events} 
  userEvents={this.state.UserEvents}
  />

  < UserEvents 
  event={this.state.events} 
  userEvents={this.state.UserEvents}
  removeEvent= {this.handleRemoveEvent} 
  removeAllEvents = { this.handleRemoveAllEvent}
  />


</div>

  }
}