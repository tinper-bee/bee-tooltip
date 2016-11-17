'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
	/**
  * @title 方位
  */
	placement: _react.PropTypes.oneOf(['top', 'left', 'bottom', 'right']),
	/**
  * @title 颜色
  */
	colors: _react.PropTypes.oneOf(['primary', 'success', 'info', 'warning', 'danger', 'dark', '']),
	/**
  * @title 类名
  */
	className: _react.PropTypes.string,
	/**
  * @title 内容
  */
	childrend: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.string])
};

var defaultProps = {
	placement: "top",
	colors: '',
	className: '',
	childrend: 'tooltip'
};

var clsPrefix = 'u-tooltip';

var Tooltip = function (_Component) {
	_inherits(Tooltip, _Component);

	function Tooltip(props) {
		_classCallCheck(this, Tooltip);

		return _possibleConstructorReturn(this, _Component.call(this, props));
	}

	Tooltip.prototype.render = function render() {
		var _props = this.props;
		var placement = _props.placement;
		var colors = _props.colors;
		var className = _props.className;
		var children = _props.children;

		var others = _objectWithoutProperties(_props, ['placement', 'colors', 'className', 'children']);

		var clsObj = {};
		if (className) {
			clsObj[className] = true;
		}
		if (placement) {
			clsObj[placement] = true;
		}
		if (colors) {
			clsObj[colors] = true;
		}
		var classNames = (0, _classnames2["default"])(clsPrefix, clsObj);
		return _react2["default"].createElement(
			'div',
			_extends({
				role: 'tooltip',
				className: classNames
			}, others),
			_react2["default"].createElement('div', { className: 'tooltip-arrow' }),
			_react2["default"].createElement(
				'div',
				{ className: 'tooltip-inner' },
				this.props.children
			)
		);
	};

	return Tooltip;
}(_react.Component);

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;
exports["default"] = Tooltip;
module.exports = exports['default'];