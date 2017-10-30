/**
 * @title 基本Tooltip
 * @description `placement`参数控制显示位置，`trigger`设置显示方式。
 */


import React, { Component } from 'react';
import Tooltip from '../../src';
import Button from 'bee-button';


class Demo2 extends Component {
    handle = () => {
        //debugger;
    }
    render () {
        let tip = (
            <div>
                这是一个很强的提醒！
            </div>
        )

        return (
            <div className="demo-tooltip">
                <Tooltip delay={2000} inverse overlay={tip}>
                    <Button colors="primary">
                        延时显示
                    </Button>
                </Tooltip>
            </div>
        )
    }
}

export default Demo2;