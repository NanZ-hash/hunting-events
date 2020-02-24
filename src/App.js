import React from 'react';
import EventList from './EventList.js'
import MHW from './TestdB.js';
import 'bootstrap/dist/css/bootstrap.min.css';



export default class App extends React.Component { 


  render ()  { 

return <div>
  <EventList  event={MHW.events}/>
</div>

  }
}