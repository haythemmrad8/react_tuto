import React from 'react';

function Welcome(props){


  return <div>welcom from {props.name} :3
    <p> {props.children}</p>
   </div>;
  
}



export default Welcome;