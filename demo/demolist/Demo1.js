/**
 * @title 静态Tooltip
 * @description `placement`参数控制显示位置。
 */
class Demo1 extends Component {
	render () {
		return (
			<div className="demo-tooltip">
				<Tooltip inverse id="tooltip1"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
				<Tooltip inverse id="tooltip2" placement="top"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
				<Tooltip id="tooltip3" placement="left"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
				<Tooltip id="tooltip4" placement="bottom"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
			</div>
		)
	}
}