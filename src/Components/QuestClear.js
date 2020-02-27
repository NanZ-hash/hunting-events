import React from 'react';

export default class QuestClear extends React.Component { 
constructor(props) { 
    super (props); 

    this.state = {
        isComplete : false,
    }
}
  
  clear = (e) => { 
    console.log(' Quest Clear ...  ')
    //this.props.QuestClear() 
    this.setState ({ isComplete : true })
  
}



  render ()  { 
  
    

return (  
  <button   onClick={this.clear}>
  Done
    </button>
)
  }
}
