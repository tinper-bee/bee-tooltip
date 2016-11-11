import Tooltip from '../src';
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
				<Tooltip placement="right" className="in" id="tooltip-right">
			      Tooltip right
			    </Tooltip>

			    <Tooltip placement="top" className="in" id="tooltip-top">
			      Tooltip top
			    </Tooltip>

			    <Tooltip placement="left" className="in" id="tooltip-left">
			      Tooltip left
			    </Tooltip>

			    <Tooltip placement="bottom" className="in" id="tooltip-bottom">
			      Tooltip bottom
			    </Tooltip>
			</div>
		)
	}
}
export default Demo;