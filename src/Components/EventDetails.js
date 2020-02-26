import React from 'react';


    export default function EventDetails (props) {




    const event=(  
     <div > 
    <div className = 'imblem' >
    <img src={'https://mhwtactics.files.wordpress.com/2018/10/cropped-mhw-research_expedition_emblem1.png'} />
    <h1>{props.details.name}</h1>
    </div>  

    <div className ='meta' > 
    <h2 className='tagline'> {props.details.successConditions} </h2>
    <p className='detail-overview'> {props.details.description}
 


    </p>

    </div>

     </div>
     
 )

    


 return   ( 
 <div> 
{event}

</div>
 );

  
}