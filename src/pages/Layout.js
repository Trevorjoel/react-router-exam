import React from "react";
import {Link} from 'react-router-dom';
export default class Layout extends React.Component{
    render(){
        return (
            <div>
            <h1>Killer News.net</h1>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='./pages/archives'>Archives</Link></li>
                        <li><Link to='./pages/settings'>Settings</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}