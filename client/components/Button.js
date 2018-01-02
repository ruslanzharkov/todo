import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Button extends React.Component {
    render () {
        return(
            <button type="submit" className="btn padd">Create</button>
        );
    }
}