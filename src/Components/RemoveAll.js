import React from 'react';

export default class RemoveAll extends React.Component { 

 
RemoveAllEvent = (e) => { 
  console.log('All Event removed ')
  console.log('handling THE REMOVE click!')
  this.props.removeAllEvents()
}


RemoveAllClear = (e) => { 
  console.log('All Completaed! Event removed ')
  console.log('handling THE REMOVE click!')
  this.props.removeQuestClear()
}


  render ()  { 

return (  
  <div>
<button onClick={this.RemoveAllEvent}> Remove All </button>

<button onClick={this.RemoveAllClear}> Remove All Clear</button>
</div>
)


  }
}
