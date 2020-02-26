import React from 'react';

export default class Remove extends React.Component { 

  
  RemoveEvent = (e) => { 
    console.log('Event removed ')
    console.log('handling THE REMOVE click!')
    this.props.removeEvent()

}

  render ()  { 

return (  
  <div>
<button onClick={this.RemoveEvent}> Remove </button>

</div>
)
  }
}
