import React from 'react';
import './Box.css';


function Box(props)
{
	return(
		<div className='box'>
		<img src={`https://robohash.org/${props.data.id}` }/>
		<div className='name'>{props.data.name}</div>
		<div className='ema'>{props.data.email}</div>
		</div>





		);
}

export default Box;