import React from 'react';

export const Notes =({notes})=>{
    return(
        <ul>
            
          {notes.map((note, key)=>
          <li key={key}>{note.title}</li>)
        } 
        </ul>
    )
}