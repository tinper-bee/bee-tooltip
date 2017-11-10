'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _OverlayTrigger = require('bee-overlay/build/OverlayTrigger');

var _OverlayTrigger2 = _interopRequireDefault(_OverlayTrigger);

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
    id: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].number]),
    inverse: _propTypes2["default"].bool,
    /**
     * 相对目标元素显示上下左右的位置
     */
    placement: _propTypes2["default"].oneOf(['top', 'right', 'bottom', 'left']),

    /**
     * 绝对定位上边距.
     */
    positionTop: _propTypes2["default"].oneOfType([_propTypes2["default"].number, _propTypes2["default"].string]),
    /**
     * 绝对定位左边距
     */
    positionLeft: _propTypes2["default"].oneOfType([_propTypes2["default"].number, _propTypes2["default"].string]),

    /**
     * 与目标Top的距离
     */
    arrowOffsetTop: _propTypes2["default"].oneOfType([_propTypes2["default"].number, _propTypes2["default"].string]),
    /**
     * 与目标Left的距离
     */
    arrowOffsetLeft: _propTypes2["default"].oneOfType([_propTypes2["default"].number, _propTypes2["default"].string])
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
        var _classes;

        var _props = this.props,
            placement = _props.placement,
            positionTop = _props.positionTop,
            positionLeft = _props.positionLeft,
            arrowOffsetTop = _props.arrowOffsetTop,
            arrowOffsetLeft = _props.arrowOffsetLeft,
            className = _props.className,
            style = _props.style,
            children = _props.children,
            clsPrefix = _props.clsPrefix,
            overlay = _props.overlay,
            inverse = _props.inverse,
            others = _objectWithoutProperties(_props, ['placement', 'positionTop', 'positionLeft', 'arrowOffsetTop', 'arrowOffsetLeft', 'className', 'style', 'children', 'clsPrefix', 'overlay', 'inverse']);

        var classes = (_classes = {}, _defineProperty(_classes, placement, true), _defineProperty(_classes, 'inverse', inverse), _classes);

        var outerStyle = _extends({
            top: positionTop,
            left: positionLeft
        }, style);

        var arrowStyle = {
            top: arrowOffsetTop,
            left: arrowOffsetLeft
        };

        var classNames = (0, _classnames2["default"])(clsPrefix, classes);

        var overlayNode = _react2["default"].createElement(
            'div',
            {
                className: (0, _classnames2["default"])(className, classNames),
                style: outerStyle
            },
            _react2["default"].createElement('div', { className: 'tooltip-arrow', style: arrowStyle }),
            _react2["default"].createElement(
                'div',
                { className: 'tooltip-inner' },
                overlay
            )
        );

        return _react2["default"].createElement(
            _OverlayTrigger2["default"],
            _extends({ shouldUpdatePosition: true, placement: placement }, others, { overlay: overlayNode }),
            children
        );
    };

    return Tooltip;
}(_react2["default"].Component);

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

exports["default"] = Tooltip;
module.exports = exports['default'];