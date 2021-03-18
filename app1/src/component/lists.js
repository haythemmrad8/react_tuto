import React from 'react';



function Lists(props){
    const names = ["haythem01","haythem02","haythem03"];

    return <div>
        <ul>
           {names.map(item=><li key={item}>{item}</li>)} 
        </ul>
    </div>
}



export default Lists;