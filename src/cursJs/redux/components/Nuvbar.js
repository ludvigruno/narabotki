import React from 'react'
import {NavLink} from 'react-router-dom';

export const Nuvbar=()=> {
    return (
        <nav>
        <div>
            <u>
                <li>
                    <NavLink to='/'>Главная</NavLink>
                </li>
                <li>
                <NavLink to='/about'>О чем то</NavLink>
                </li>
            </u>
        </div>
    </nav>
    )
       
}
