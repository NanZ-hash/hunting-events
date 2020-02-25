import React from 'react';

export default class Edit extends React.Component { 

  
  editEvent = (e) => { 
    console.log('Event edited ')
    console.log('handling THE click!')

}

  render ()  { 

return (  
  <div>
<button onClick={this.editEvent}> Edit </button>
</div>
)
  }
}
