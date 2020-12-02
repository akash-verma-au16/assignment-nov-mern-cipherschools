import React from 'react';
import './Card.css';

let Card = (props) => {
    return(
        <div className='Card' key={props.id}>
            <h1>{props.dynamicName}</h1>
            <p>{props.count.clickNumber}</p>
            <button class='button1' onClick={() => {props.countClick(props.id)}}>+</button>
            <button class='button2' onClick={() => {props.refreshClick(props.id)}}></button>
            <button class='button3' onClick={() => {props.reduceClick(props.id)}}>-</button>
        </div>
    )
}
export default Card;