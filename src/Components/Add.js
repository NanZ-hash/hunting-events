import React from 'react';

export default class Add extends React.Component { 

  
  AddEvent = (e) => { 
    console.log('Event add EVENT ')
    console.log('handling THE click!')
    this.props.theEvent()
}

  render ()  { 

return (  
  <div>
<button onClick={this.AddEvent}> Add </button>
</div>
)
  }
}
