import { Tooltip } from '../src';
import React, { Component } from 'react'
import ReactDOM from 'react-dom';

class Demo extends Component {
	constructor(props) {
		super(props);
	}

	render(){
		return( 
			<Tooltip placement="bottom" className="in">
				show out
			</Tooltip>
		)
	}
}
export default Demo;