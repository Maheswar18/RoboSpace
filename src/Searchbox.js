import React from 'react';
function Searchbox(props)
{
	return(
		<input type='search' placeholder='enter' onChange={props.pr}/>

		);
}

export default Searchbox;