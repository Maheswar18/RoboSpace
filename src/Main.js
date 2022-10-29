import React from 'react';
import Senderbox from './Senderbox';
import Searchbox from './Searchbox';
import Scroll from './Scroll';

class Main extends React.Component{
	constructor()
	{
		super()
		this.state={
			robos:[],
			search:'',
		    

		}
	}

	onevent=(event)=>
	{
		this.setState({search:event.target.value})
		
		
		
	}

	componentDidMount()
	{
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>{return response.json();})
		.then(user=>{this.setState({robos:user})})
	}
	

	render()
	{
		if(this.state.robos.length===0){return<h1 className='load'>Loading</h1>;}
		const filtered=this.state.robos.filter((rob)=>
		{return (rob.name.toLowerCase().includes(this.state.search.toLowerCase()));
			});
		console.log(filtered);
			return(
			<div >
		   <h1 className='he'>robo</h1>
		   <Searchbox pr={this.onevent}/>
		  <div className='gh'>
		  <Scroll>
		  		<Senderbox  robos={filtered}/>
		  </Scroll>
		  </div>
		  </div>
	  );
	}


}

export default Main;