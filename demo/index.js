import Demo from './TooltipDemo';
import Tooltip from '../src';
import { OverlayTrigger }  from 'bee-overlay';
import Button from 'bee-button';

function demo1 () {
	return (
		<div className="demo-tooltip">
			<Tooltip id="tooltip1"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
			<Tooltip id="tooltip2" placement="top"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
			<Tooltip id="tooltip3" placement="right"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
			<Tooltip id="tooltip4" placement="bottom"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
		</div>
	)
}

const tooltip1 = function () {
	return (
	  <Tooltip id="tooltip5"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
	);
}
const tooltip2 = function () {
	return (
	  <Tooltip id="tooltip6"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
	);
}
const tooltip3 = function () {
	return (
	  <Tooltip id="tooltip7"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
	);
}
const tooltip4 = function () {
	return (
	  <Tooltip id="tooltip8"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
	);
}

function demo2 () {

	return (
		<div className="demo-overlay-trigger">
		    <OverlayTrigger overlay = {tooltip1()}  placement="top">
		    	<Button>tooltip</Button>
		    </OverlayTrigger>
		    <OverlayTrigger overlay = {tooltip2()}  placement="left">
		    	<Button>tooltip</Button>
		    </OverlayTrigger>
		    <OverlayTrigger overlay = {tooltip3()}  placement="right">
		    	<Button>tooltip</Button>
		    </OverlayTrigger>
		    <OverlayTrigger overlay = {tooltip4()}  placement="bottom">
		    	<Button>tooltip</Button>
		    </OverlayTrigger>
		</div>
	)
}
ReactDOM.render(demo1(), document.getElementById('ReactTooltipDemo1'));
ReactDOM.render(demo2(), document.getElementById('ReactTooltipDemo2'));
