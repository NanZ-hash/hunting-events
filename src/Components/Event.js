import React from 'react';

export default class Event extends React.Component { 


  
  callDetail =(event)=> { 
    console.log ("DATA")
   this.props.handleDetailsClick()
  }
  render ()  { 


return   ( 
<div className =' event '  onClick={this.callDetail}> 

<h4>{this.props.eventName} </h4> 
<h6> {this.props.questRank} </h6>
<p>{this.props.location}</p>

</div>
)

  }
}