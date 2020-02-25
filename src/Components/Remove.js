import React from 'react';

export default class Remove extends React.Component { 

  
  RemoveEvent = (e) => { 
    console.log('Event removed ')
    console.log('handling THE REMOVE click!')
    this.props.removeEvent()

}

RemoveAllEvent = (e) => { 
  console.log('All Event removed ')
  console.log('handling THE REMOVE click!')
  this.props.removeAllEvents()

}



  render ()  { 

return (  
  <div>
<button onClick={this.RemoveEvent}> Remove </button>
<button onClick={this.RemoveAllEvent}> Remove All </button>
</div>
)
  }
}
