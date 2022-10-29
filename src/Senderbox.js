import React from 'react';
import Box from './Box';
import './index.css';

function SenderBox(props)
{
	if (props.robos.length===0)
	{
		return (<h1 className='ash'>u r asshole</h1>);
	}

	return(
		
		props.robos.map((robos,i)=>
			{return <Box key={i} data={robos}/>;}
			)
		
		);
}

export default SenderBox;