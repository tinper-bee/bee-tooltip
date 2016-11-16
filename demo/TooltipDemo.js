import Tooltip from '../src';
import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import OverlayTrigger from '../src/OverlayTrigger';


class Demo extends Component {
	constructor(props) {
		super(props);
	}

	render(){
		const tooltip = (
		  <Tooltip id="tooltip"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
		);
		return( 
			<div>
			    <OverlayTrigger overlay = {tooltip}  placement="bottom">
			    	<span>tooltip</span>
			    </OverlayTrigger>
			</div>
		)
	}
}

export default Demo;