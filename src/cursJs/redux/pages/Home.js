import React from 'react'
import { Form } from '../components/Form';
import { Notes } from '../components/Notes';


export const Home=()=> {
    const notes = new Array(3)
    .fill('')
    .map((key,i)=>({id:1, title:`Note ${i+1}`}))
    return (
        <div>
           <Form />
           <hr/>
           <Notes notes={notes} />
        </div>
    )
}
