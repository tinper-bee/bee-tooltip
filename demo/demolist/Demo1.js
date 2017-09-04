/**
 * @title 静态Tooltip
 * @description `placement`参数控制显示位置。
 */


import React, { Component } from 'react';
import Tooltip from '../../src';


class Demo1 extends Component {
	render () {
		return (
			<div className="demo-tooltip">
				<Tooltip inverse id="tooltip1"><strong>Holy !</strong> Check this info.</Tooltip>
				<Tooltip inverse id="tooltip2" placement="top"><strong> guacamole!</strong> Check this info.</Tooltip>
				<Tooltip id="tooltip3" placement="left"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
				<Tooltip id="tooltip4" placement="bottom"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
			</div>
		)
	}
}

export default Demo1;