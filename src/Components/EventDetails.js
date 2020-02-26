import React from 'react';


    export default function EventDetails (props) {

 const event=(  
     <div > 
<div className = 'imblem' >
<img src={'https://mhwtactics.files.wordpress.com/2018/10/cropped-mhw-research_expedition_emblem1.png'} />
    </div>  

    <div className ='meta' > 
    <h2 className='tagline'> Somthing here </h2>
    <p className='detail-overview'> another thing here 
    </p>

    </div>

     </div>
     
 )

    //setting time propryty from the timestamp .. 
// Quset tim start..
//    const timeStart = new Date(this.props.start)
//      const questStart= `${timeStart.getFullYear()} / ${timeStart.getMonth()} / ${timeStart.getDay()}`
// // // Quest time End.. 
//     const timeEnd = new Date(this.props.end)
//      const questEnd= `${timeEnd.getFullYear()} / ${timeEnd.getMonth()} / ${timeEnd.getDay()}`


 return   ( 
 <div> 
{event}

</div>
 );

  
}