import React, { Component,PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

const propTypes = {
	/**
	 * @title 方位
	 */
	placement: PropTypes.oneOf(['top','left','bottom','right']),
	/**
	 * @title 颜色
	 */
	colors: PropTypes.oneOf(['primary', 'success', 'info', 'warning', 'danger', 'dark','']),
	/**
	 * @title 类名
	 */
	className: PropTypes.string,
	/**
	 * @title 内容
	 */
	childrend: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.string
	])
};

const defaultProps = {
	placement: "left",
	colors: 'primary',
	className: '',
	childrend: 'tooltip'
};

const clsPrefix = 'u-tooltip';

class Tooltip extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let {placement,colors,className,children, ...others} = this.props;
		let clsObj = {};
		if(className) {
			clsObj[className] = true;
		}
		if(placement){
			clsObj[placement] = true;
		}
		if(colors) {
			clsObj[colors] = true;
		}
		let classNames = classnames(clsPrefix,clsObj);
		return(
			<div 
				role="tooltip"
				className = {classNames}
				{...others}>
				<div className="tooltip-arrow"></div>
				<div className="tooltip-inner">{this.props.children}</div>
			</div>
		)
			
		
	}
}

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;
export default Tooltip;