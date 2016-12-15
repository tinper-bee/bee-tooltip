/**
 * @title 动态触发Tooltip
 * @description OverlayTrigger组件详见bee-overlay库
 */
 const tooltip1 = function () {
	return (
	  <Tooltip id="tooltip5" positionTop="20px"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
	);
}
class Demo2 extends Component {
	render(){
		return (
			<OverlayTrigger overlay = {tooltip1()}  placement="top">
		    	<Button colors="primary">tooltip</Button>
		    </OverlayTrigger>
		)
	}
}