import Tooltip from '../src';
import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import  { OverlayTrigger }  from 'bee-overlay';



		const tooltip = function () {
			return (
			  <Tooltip id="tooltip"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
			);
		}
		const Demo = function () {
			return (
				<div>
				    <OverlayTrigger overlay = {tooltip()}  placement="bottom">
				    	<span>tooltip</span>
				    </OverlayTrigger>
				</div>
			);
		}


export default Demo;
