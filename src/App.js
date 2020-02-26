import React from 'react';
import EventList from './Components/EventList'
import MHW from './TestdB.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserEvents from './Components/UserEvents' 
import EventDetails from './Components/EventDetails'
import axios from 'axios'



export default class App extends React.Component { 
  constructor (props)  { 
    super (props); 

    // seeting the inital valuse .. 
    this.state ={
      events : [], 
      UserEvents:[], 
      current :{ },
      QuestClear:[], 


  }
 const url = 'https://mhw-db.com/events'; 
  axios({
    method: 'get',
    url: url
})
    .then(res => {
      this.setState({events: res.data});
    })
    .catch(err => {
        console.log('ERROR: ', err);
    });
}; 






  // for adding the events
  handleAddEvent = (event) => { 
    const UserEvents = [...this.state.UserEvents] ;
      UserEvents.push(event)
      console.log (`addind ${ event.name } to the UserEvents`)
    this.setState({ UserEvents }) // call for the change to happen . . .
    console.log(UserEvents) 
  }


  // for the Chceking events .. : 
handleQuestClear = (event) => { 
  const QuestClear = [...this.state.QuestClear] ;
  QuestClear.push(event)
    console.log (`Check  ${ event.name } to the UserEvents`)
  this.setState({ QuestClear }) // call for the change to happen . . .
  console.log( QuestClear ) 
  
}



// for the REMOVEING Chceking events .. : 


// if the box is checked remove it... 
handleRemoveQuestClear = (event) => { 
  //let QuestClear = [...this.state.QuestClear] ;
 // let UserEvents = [...this.state.UserEvents]
  const vlaue = event.name; 
 // const serch=this.state.QuestClear.slice(1,enentIndex)
  console.log(`value ` + vlaue)
 // = e.target.value
   const notList = this.state.UserEvents.filter(function(event) {  // making a new array 
    return !event.name.includes(vlaue)//!list.includes(serch)
   })
  

    console.log (`Clear all Quests`+notList)
  this.setState({ UserEvents : notList}) // call for the change to happen . . .


  }
  // const UserEvents = [...this.state.UserEvents]
  // if item compleate remove it ... 








// for removing the events ... .
handleRemoveEvent = (event) => {
  const UserEvents = [...this.state.UserEvents]
  // if statmnet if there is somthing selected or remove it all at once ... 
  const enentIndex = UserEvents.indexOf(event); 
  UserEvents.splice(enentIndex,1)
  console.log (`Removing ${ event.name } from UserEvents `) 
  this.setState({ UserEvents }) // call for the change to happen . . .
  console.log(UserEvents) 
}



handleRemoveAllEvent = (event) => {
  let UserEvents = [...this.state.UserEvents]
  let   QuestClear=[...this.state.QuestClear]
  UserEvents = []
  QuestClear=[]
  console.log (`Removing All from UserEvents `) 
  this.setState({ UserEvents ,  QuestClear}) // call for the change to happen . . .
  console.log(UserEvents) 
}



    
  handleDetailsClick = (event) => {
    
  const url2 = `https://mhw-db.com/events/${event.id}`
 
  axios({
      method: 'get',
      url: url2
  })
      .then(res => {
           this.setState({current: res.data});
      })
      .catch(err => {
          console.log('ERROR: ', err);
      });
};


  render ()  { 

return <div>
  <div className='con'>
  <div className='div1'>
  <h1> Event List </h1>
  <EventList  
  handleDetailsClick={this.handleDetailsClick}
  theEvent={this.handleAddEvent}
  event={this.state.events} 
  userEvents={this.state.UserEvents}
  />
</div>

<div className='div3' > <EventDetails details= { this.state.current } /> </div>



<div className =' div2 '> 
<h1> User List </h1>
  < UserEvents 
  handleDetailsClick={this.handleDetailsClick}
  event={this.state.events} 
  userEvents={this.state.UserEvents}
  removeEvent= {this.handleRemoveEvent} 
  removeAllEvents = { this.handleRemoveAllEvent}
  QuestClear = { this.handleQuestClear}
  removeQuestClear ={ this.handleRemoveQuestClear}
  
  />
  </div>

</div>

</div>

  }
}
