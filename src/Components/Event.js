import React from 'react';
import Edit from './Edit'

export default class Event extends React.Component { 
  constructor(props){ 
    super(props); 
    this.state= { 
     editTHis : [],
      newItem:[],
      eventName: this.props.eventName,
    };
  }
  
    editEvent = (e) => { 
      console.log('here' , this.state.editThis )
  e.preventDefault();

  this.setState({ 
  eventName: this.state.editThis,
  newItem:[],
  });
}

onTextBoxChange = (e) => { 
  e.stopPropagation()
  console.log( "somthing " ,e.target.vlaue ,"NEW ITEM" , this.state.newItem); 
  this.setState({ 
    newItem: e.target.value ,
    editThis:this.state.newItem ,
    eventName: this.state.editThis,
  })
}

  callDetail =(event)=> { 
    console.log ("DATA")
   this.props.handleDetailsClick()
   
  }
  render ()  { 


return   ( 
<div className =' event ' > 

<h4  onClick={this.callDetail} >{this.state.eventName} </h4> 
<h6> {this.props.questRank} </h6>
<h3>{this.props.location}</h3>


<form> 
      <input type='txet' 
      placeholder=''
      vlaue={this.state.newItem}
      onChange={this.onTextBoxChange}
      />
     <button onClick={this.editEvent}> Save </button>
    </form>

</div>
)

  }
}