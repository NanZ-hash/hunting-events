import React from 'react';



export default class Event extends React.Component { 
constructor (props) {
    super (props); 
    

   
}

questStart(qStart){
    var qStart = new Date(this.props.start);
   }

    AddEvent = (e) => { 
        console.log('Event add')
    }

  
    

  render ()  { 
   

    //setting time propryty from the timestamp .. 
// Quset tim start..
    const timeStart = new Date(this.props.start)
    const questStart= `${timeStart.getFullYear()} / ${timeStart.getMonth()} / ${timeStart.getDay()}`
// Quest time End.. 
    const timeEnd = new Date(this.props.end)
    const questEnd= `${timeEnd.getFullYear()} / ${timeEnd.getMonth()} / ${timeEnd.getDay()}`


return   ( 
<div className =' event '> 

<h1>{this.props.eventName} </h1> 
<h3> {this.props.questRank} </h3>
<p>{this.props.des}</p>
<p> Start {questStart}</p>
<p> End {questEnd}</p>
<p>Target : {this.props.target}</p>
<p>Location : {this.props.location} </p> 
<button onClick={this.AddEvent}> Add </button>
</div>
)

  }
}