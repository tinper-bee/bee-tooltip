'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
  /**
   * @required
   */
  id: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.number]),

  /**
   * 相对目标元素显示上下左右的位置
   */
  placement: _react2["default"].PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

  /**
   * 绝对定位上边距.
   */
  positionTop: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.number, _react2["default"].PropTypes.string]),
  /**
   * 绝对定位左边距
   */
  positionLeft: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.number, _react2["default"].PropTypes.string]),

  /**
   * 与目标Top的距离
   */
  arrowOffsetTop: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.number, _react2["default"].PropTypes.string]),
  /**
   * 与目标Left的距离
   */
  arrowOffsetLeft: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.number, _react2["default"].PropTypes.string])
};

var defaultProps = {
  placement: 'right',
  clsPrefix: 'u-tooltip'
};

var Tooltip = function (_React$Component) {
  _inherits(Tooltip, _React$Component);

  function Tooltip() {
    _classCallCheck(this, Tooltip);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Tooltip.prototype.render = function render() {
    var _props = this.props;
    var placement = _props.placement;
    var positionTop = _props.positionTop;
    var positionLeft = _props.positionLeft;
    var arrowOffsetTop = _props.arrowOffsetTop;
    var arrowOffsetLeft = _props.arrowOffsetLeft;
    var className = _props.className;
    var style = _props.style;
    var children = _props.children;
    var clsPrefix = _props.clsPrefix;

    var others = _objectWithoutProperties(_props, ['placement', 'positionTop', 'positionLeft', 'arrowOffsetTop', 'arrowOffsetLeft', 'className', 'style', 'children', 'clsPrefix']);

    var classes = _defineProperty({}, placement, true);

    var outerStyle = _extends({
      top: positionTop,
      left: positionLeft
    }, style);

    var arrowStyle = _extends({
      top: arrowOffsetTop,
      left: arrowOffsetLeft
    }, style);

    var classNames = (0, _classnames2["default"])(clsPrefix, classes);
    return _react2["default"].createElement(
      'div',
      _extends({}, others, {
        className: (0, _classnames2["default"])(className, classNames),
        style: outerStyle
      }),
      _react2["default"].createElement('div', { className: 'tooltip-arrow', style: arrowStyle }),
      _react2["default"].createElement(
        'div',
        { className: 'tooltip-inner' },
        children
      )
    );
  };

  return Tooltip;
}(_react2["default"].Component);

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

exports["default"] = Tooltip;
module.exports = exports['default'];