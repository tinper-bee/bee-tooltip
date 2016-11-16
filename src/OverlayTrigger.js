import contains from 'dom-helpers/query/contains';
import React, { cloneElement } from 'react';
import ReactDOM from 'react-dom';

import Overlay from './overlay';

import createChainedFunction from './createChainedFunction';

/**
 * 校验数据one是否等于数据of或者是数组of内的数据
 * @param {string} one
 * @param {string|array} of
 * @returns {boolean}
 */
function isOneOf(one, of) {
  if (Array.isArray(of)) {
    return of.indexOf(one) >= 0;
  }
  return one === of;
}

const triggerType = React.PropTypes.oneOf(['click', 'hover', 'focus']);

const propTypes = {
  ...Overlay.propTypes,

  /**
   *  指定哪种或哪些动作触发Overlay
   */
  trigger: React.PropTypes.oneOfType([
    triggerType, React.PropTypes.arrayOf(triggerType),
  ]),

  /**
   * 延迟多长时间触发一次Overlay显示或隐藏
   */
  delay: React.PropTypes.number,
  /**
   * 延迟多长时间触发一次显示Overlay
   */
  delayShow: React.PropTypes.number,
  /**
   * 延迟多长时间触发一次隐藏Overlay
   */
  delayHide: React.PropTypes.number,

  /**
   * Overlay默认是否显示
   */
  defaultOverlayShown: React.PropTypes.bool,

  /**
   * 悬浮在指定目标元素上一个元素或文字
   */
  overlay: React.PropTypes.node.isRequired,

  /**
   * @private
   */
  onBlur: React.PropTypes.func,
  /**
   * @private
   */
  onClick: React.PropTypes.func,
  /**
   * @private
   */
  onFocus: React.PropTypes.func,
  /**
   * @private
   */
  onMouseOut: React.PropTypes.func,
  /**
   * @private
   */
  onMouseOver: React.PropTypes.func,

  // Overridden props from `<Overlay>`.
  /**
   * @private
   */
  target: React.PropTypes.oneOfType([
      React.PropTypes.element,
      React.PropTypes.string,
      React.PropTypes.node
  ]),
   /**
   * @private
   */
  onHide: React.PropTypes.oneOf([null]),
  /**
   * @private
   */
  show: React.PropTypes.oneOf([null]),
};

const defaultProps = {
  defaultOverlayShown: false,
  trigger: ['hover', 'focus'],
};

class OverlayTrigger extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleToggle = this.handleToggle.bind(this);
    this.handleDelayedShow = this.handleDelayedShow.bind(this);
    this.handleDelayedHide = this.handleDelayedHide.bind(this);
    this.handleHide = this.handleHide.bind(this);

    this.handleMouseOver = e => (
      this.handleMouseOverOut(this.handleDelayedShow, e)
    );
    this.handleMouseOut = e => (
      this.handleMouseOverOut(this.handleDelayedHide, e)
    );

    this._mountNode = null;

    this.state = {
      show: props.defaultOverlayShown,
    };
  }

  componentDidMount() {
    this._mountNode = document.createElement('div');
    this.renderOverlay();
  }

  componentDidUpdate() {
    this.renderOverlay();
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this._mountNode);
    this._mountNode = null;

    clearTimeout(this._hoverShowDelay);
    clearTimeout(this._hoverHideDelay);
  }

  handleToggle() {
    if (this.state.show) {
      this.hide();
    } else {
      this.show();
    }
  }

  handleDelayedShow() {
    if (this._hoverHideDelay != null) {
      clearTimeout(this._hoverHideDelay);
      this._hoverHideDelay = null;
      return;
    }

    if (this.state.show || this._hoverShowDelay != null) {
      return;
    }

    const delay = this.props.delayShow != null ?
      this.props.delayShow : this.props.delay;

    if (!delay) {
      this.show();
      return;
    }

    this._hoverShowDelay = setTimeout(() => {
      this._hoverShowDelay = null;
      this.show();
    }, delay);
  }

  handleDelayedHide() {
    if (this._hoverShowDelay != null) {
      clearTimeout(this._hoverShowDelay);
      this._hoverShowDelay = null;
      return;
    }

    if (!this.state.show || this._hoverHideDelay != null) {
      return;
    }

    const delay = this.props.delayHide != null ?
      this.props.delayHide : this.props.delay;

    if (!delay) {
      this.hide();
      return;
    }

    this._hoverHideDelay = setTimeout(() => {  
      this._hoverHideDelay = null;
      this.hide();
    }, delay);
  }


  //完善补充mouseEnter和mouseLeave
  handleMouseOverOut(handler, e) {
    const target = e.currentTarget;
    const related = e.relatedTarget || e.nativeEvent.toElement;
    //暂时注释这段
    // if (!related || related !== target && !contains(target, related)）{ 
    if (!related || related !== target && !contains(target, related)) {
      handler(e);
    }
  }

  handleHide() {
    this.hide();
  }

  show() {
    this.setState({ show: true });
  }

  hide() {
    this.setState({ show: false });
  }

  makeOverlay(overlay, props) {
    console.log(this);
    return (
      <Overlay
        {...props}
        show={this.state.show}
        onHide={this.handleHide}
        target={this}
      >
        {overlay}
      </Overlay>
    );
  }

  renderOverlay() {
    ReactDOM.unstable_renderSubtreeIntoContainer(
      this, this._overlay, this._mountNode
    );
  }

  render() {
    const {
      trigger,
      overlay,
      children,
      onBlur,
      onClick,
      onFocus,
      onMouseOut,
      onMouseOver,
      ...props
    } = this.props;

    console.log(overlay);

    delete props.delay;
    delete props.delayShow;
    delete props.delayHide;
    delete props.defaultOverlayShown;

    const child = React.Children.only(children);
    const childProps = child.props;

    const triggerProps = {
      'aria-describedby': overlay.props.id
    };

    // FIXME: The logic here for passing through handlers on this component is
    // inconsistent. We shouldn't be passing any of these props through.

    triggerProps.onClick = createChainedFunction(childProps.onClick, onClick);

    if (isOneOf('click', trigger)) {
      triggerProps.onClick = createChainedFunction(
        triggerProps.onClick, this.handleToggle
      );
    }

    if (isOneOf('hover', trigger)) {

      triggerProps.onMouseOver = createChainedFunction(
        childProps.onMouseOver, onMouseOver, this.handleMouseOver
      );

      triggerProps.onMouseOut = createChainedFunction(
        childProps.onMouseOut, onMouseOut, this.handleMouseOut
      );
    }

    if (isOneOf('focus', trigger)) {
      triggerProps.onFocus = createChainedFunction(
        childProps.onFocus, onFocus, this.handleDelayedShow
      );
      triggerProps.onBlur = createChainedFunction(
        childProps.onBlur, onBlur, this.handleDelayedHide
      );
    }


    this._overlay = this.makeOverlay(overlay, props);
    console.log(child);
    return cloneElement(child, triggerProps);
  }
}

OverlayTrigger.propTypes = propTypes;
OverlayTrigger.defaultProps = defaultProps;

export default OverlayTrigger;
