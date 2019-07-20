import React from 'react';
import './Form.css'

const Form = (props) => {
    return (
        <form onSubmit={props.getWeather}>
            <li>
            <input type="text" name="city" placeholder="City..." />
            <input type="text" name="country" placeholder="Country...." />
            </li>
            <button>Get Weather</button>
        </form>
    );
}

export default Form;