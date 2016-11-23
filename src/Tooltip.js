import classnames from 'classnames';
import React from 'react';


const propTypes = {
  /**
   * @required
   */
  id: React.PropTypes.oneOfType([
    React.PropTypes.string, React.PropTypes.number,
  ]),

  /**
   * 相对目标元素显示上下左右的位置
   */
  placement: React.PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

  /**
   * 绝对定位上边距.
   */
  positionTop: React.PropTypes.oneOfType([
    React.PropTypes.number, React.PropTypes.string,
  ]),
  /**
   * 绝对定位左边距
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
  clsPrefix: 'u-tooltip'
};


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
      clsPrefix,
      ...others
    } = this.props;


    const classes = {
      [placement]: true
    };

    const outerStyle = {
      top: positionTop,
      left: positionLeft,
      ...style,
    };

    const arrowStyle = {
      top: arrowOffsetTop,
      left: arrowOffsetLeft
    };

    let classNames = classnames(clsPrefix,classes);
    return (
      <div
        {...others}
        className={classnames(className, classNames)}
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
