import React from 'react';

export default class Edit extends React.Component { 
  constructor(props){ 
    super(props); 
    this.state= { 
     editTHis : [ ],
      newItem:"",
      eventName: this.props.eventName,
    };
  }
  
    editEvent = (event) => { 
      console.log('here' , this.state.editThis )
  event.preventDefault();
  this.setState({ 
  eventName: this.state.editThis,
  newItem:'',
  });
}

onTextBoxChange = (event) => { 
  console.log( "somthing " ,event.target.vlaue ,"NEW ITEM" , this.state.newItem); 
  this.setState({ 
    newItem: event.target.value ,
    editThis:this.state.newItem ,
    eventName: this.state.editThis,
  })
}


// editComment=(comment,newComment)=>{
//   const newArray=[...this.state.commentItems]
//   let index=newArray.indexOf(comment)
//   newArray[index]=newComment;

//   this.setState({
//     commentItems:newArray
//   })
// }




  render ()  { 

return (  
  <div>

<form> 
      <input type='txet' placeholder='Type an Item Here ! '
      vlaue={this.state.newItem}
      onChange={this.onTextBoxChange}
      />
     <button onClick={this.editEvent}> Edit </button>
    </form>
</div>
)
  }
}
