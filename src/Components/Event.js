import React from 'react';





export default class Event extends React.Component { 

questStart(qStart){
    var qStart = new Date(this.props.start);
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

<h4>{this.props.eventName} </h4> 
<h6> {this.props.questRank} </h6>






{ /* }

<p>Target : {this.props.target}</p>
<p>{this.props.des}</p>
<img src {'https://mhwtactics.files.wordpress.com/2018/10/cropped-mhw-research_expedition_emblem1.png'};

<p> Start {questStart}</p>
<p> End {questEnd}</p>

<p>Location : {this.props.location} </p> 

{*/}
</div>
)

  }
}