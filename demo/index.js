import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var DemoArray = [{"example":<Demo1 />,"title":" 基本Tooltip","code":"/**\n * @title 基本Tooltip\n * @description `placement`参数控制显示位置，`trigger`设置显示方式。\n */\n\n\nimport React, { Component } from 'react';\nimport { Tooltip, Button } from 'tinper-bee';\n\n\nclass Demo1 extends Component {\n\n\trender () {\n\t\tlet tip = (\n\t\t\t<div>\n\t\t\t\t这是一个很强的提醒！\n\t\t\t</div>\n\t\t)\n\n\t\treturn (\n\t\t\t<div className=\"demo-tooltip\">\n\t\t\t\t<Tooltip defaultOverlayShown inverse overlay={tip}>\n\t\t\t\t\t<Button colors=\"primary\">\n\t\t\t\t\t\t请拂过我的脸庞\n\t\t\t\t\t</Button>\n\t\t\t\t</Tooltip>\n\t\t\t\t<Tooltip trigger=\"click\" rootClose placement=\"bottom\" overlay={tip}>\n\t\t\t\t\t<Button style={{ marginLeft: 100 }} colors=\"primary\">\n\t\t\t\t\t\t轻轻触碰我的指尖\n\t\t\t\t\t</Button>\n\t\t\t\t</Tooltip>\n\t\t\t</div>\n\t\t)\n\t}\n}\n\n","desc":" `placement`参数控制显示位置，`trigger`设置显示方式。"},{"example":<Demo2 />,"title":" 延时显示Tooltip","code":"/**\n * @title 延时显示Tooltip\n * @description `delay`参数设置延时显示和隐藏\n */\n\n\nimport React, { Component } from 'react';\nimport { Tooltip, Button } from 'tinper-bee';\n\n\nclass Demo2 extends Component {\n    render () {\n        let tip = (\n            <div>\n                这是一个很强的提醒！\n            </div>\n        )\n\n        return (\n            <div className=\"demo-tooltip\">\n                <Tooltip delay={2000} inverse overlay={tip}>\n                    <Button colors=\"primary\">\n                        延时显示\n                    </Button>\n                </Tooltip>\n            </div>\n        )\n    }\n}\n\n","desc":" `delay`参数设置延时显示和隐藏"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc, scss_code  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const header = (
            <div>
                {example}
                <Button style={{"marginTop": "10px"}} shape="block" onClick={ this.handleClick }>
                    { caret }
                    { text }
                </Button>
            </div>
        );
        return (
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible headerContent expanded={ this.state.open } colors='bordered' header={ header } footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ code }</code></pre>
                    { !!scss_code ? <pre><code className="hljs css">{ scss_code }</code></pre> : null }
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
            <Row>
                {DemoArray.map((child,index) => {

                    return (
                        <Demo example= {child.example} title= {child.title} code= {child.code} scss_code= {child.scss_code} desc= {child.desc} key= {index}/>
                    )

                })}
            </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));