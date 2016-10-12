import { Tooltip } from '../src';
import React, { Component } from 'react'
import ReactDOM from 'react-dom';

class Demo extends Component {
	constructor(props) {
		super(props);
	}

	render(){
		return( 
			<div>
				<h3>bottom</h3>
				<Tooltip placement="bottom" className="in">
					show out
				</Tooltip>
				<h3>right</h3>
				<Tooltip placement="right" className="in">
					show out
				</Tooltip>
				<h3>top</h3>
				<Tooltip placement="top" className="in">
					show out
				</Tooltip>
				<h3>left</h3>
				<Tooltip placement="left" className="in">
					show out
				</Tooltip>
				<h3>default</h3>
				<Tooltip className="in">
					show out
				</Tooltip>
			</div>
		)
	}
}
export default Demo;