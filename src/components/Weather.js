import React from 'react';
import './Weather.css';

const Weather =(props) => {
    return (
        <div>
            {props.city && props.country && 
                <span><p>Location: {props.city} , {props.country}</p></span>}
            {props.temperature && 
                <span><p>Temmperature: {props.temperature}</p></span>}
            {props.description && 
                <span><p>Condition: {props.description}</p></span>}
            {props.humidity && 
                <span><p>Humidity: {props.humidity}</p></span>}
            {props.error && 
                <p>{props.error}</p>}
        </div>
    );
}

export default Weather;