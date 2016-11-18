import classNames from 'classnames';
import React from 'react';


const propTypes = {
  /**
   * An html id attribute, necessary for accessibility
   * @type {string|number}
   * @required
   */
  id: React.PropTypes.oneOfType([
    React.PropTypes.string, React.PropTypes.number,
  ]),

  /**
   * Sets the direction the Tooltip is positioned towards.
   */
  placement: React.PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

  /**
   * The "top" position value for the Tooltip.
   */
  positionTop: React.PropTypes.oneOfType([
    React.PropTypes.number, React.PropTypes.string,
  ]),
  /**
   * The "left" position value for the Tooltip.
   */
  positionLeft: React.PropTypes.oneOfType([
    React.PropTypes.number, React.PropTypes.string,
  ]),

  /**
   * 与目标Top的距离
   */
  arrowOffsetTop: React.PropTypes.oneOfType([
    React.PropTypes.number, React.PropTypes.string,
  ]),
  /**
   * 与目标Left的距离
   */
  arrowOffsetLeft: React.PropTypes.oneOfType([
    React.PropTypes.number, React.PropTypes.string,
  ]),
};

const defaultProps = {
  placement: 'right',
};

const clsPrefix = 'u-tooltip';

class Tooltip extends React.Component {
  render() {
    const {
      placement,
      positionTop,
      positionLeft,
      arrowOffsetTop,
      arrowOffsetLeft,
      className,
      style,
      children,
      ...others
    } = this.props;


    const classes = {
    	'u-tooltip':true,
      [placement]: true
    };

    const outerStyle = {
      top: positionTop,
      left: positionLeft,
      ...style,
    };

    const arrowStyle = {
      top: arrowOffsetTop,
      left: arrowOffsetLeft,
      ...style,
    };

    return (
      <div
        {...others}
        role="tooltip"
        className={classNames(className, classes)}
        style={outerStyle}
      >
        <div className='tooltip-arrow' style={arrowStyle} />

        <div className='tooltip-inner'>
          {children}
        </div>
      </div>
    );
  }
}

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

export default Tooltip;
