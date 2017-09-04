
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tooltip from '../src';
import OverlayTrigger from 'bee-overlay/build/OverlayTrigger';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var DemoArray = [{"example":<Demo1 />,"title":" 静态Tooltip","code":"/**\n * @title 静态Tooltip\n * @description `placement`参数控制显示位置。\n */\n\n\nimport React, { Component } from 'react';\nimport Tooltip from 'tinper-bee';\n\n\nclass Demo1 extends Component {\n\trender () {\n\t\treturn (\n\t\t\t<div className=\"demo-tooltip\">\n\t\t\t\t<Tooltip inverse id=\"tooltip1\"><strong>Holy !</strong> Check this info.</Tooltip>\n\t\t\t\t<Tooltip inverse id=\"tooltip2\" placement=\"top\"><strong> guacamole!</strong> Check this info.</Tooltip>\n\t\t\t\t<Tooltip id=\"tooltip3\" placement=\"left\"><strong>Holy guacamole!</strong> Check this info.</Tooltip>\n\t\t\t\t<Tooltip id=\"tooltip4\" placement=\"bottom\"><strong>Holy guacamole!</strong> Check this info.</Tooltip>\n\t\t\t</div>\n\t\t)\n\t}\n}\n\n","desc":" `placement`参数控制显示位置。"},{"example":<Demo2 />,"title":" 动态触发Tooltip","code":"/**\n * @title 动态触发Tooltip\n * @description OverlayTrigger组件详见bee-overlay库\n */\n\nimport Button from 'bee-button';\nimport React, { Component } from 'react';\nimport Tooltip from 'tinper-bee';\nimport OverlayTrigger from 'bee-overlay/build/OverlayTrigger';\n\n\nconst tooltip1 = function () {\n\treturn (\n\t  <Tooltip id=\"tooltip5\" positionTop=\"20px\"><strong>Holy guacamole!</strong> Check this info.</Tooltip>\n\t);\n}\nclass Demo2 extends Component {\n\trender(){\n\t\treturn (\n\t\t\t<OverlayTrigger overlay = {tooltip1()}  placement=\"top\">\n\t\t    \t<Button colors=\"primary\">tooltip</Button>\n\t\t    </OverlayTrigger>\n\t\t)\n\t}\n}\n\n\n","desc":" OverlayTrigger组件详见bee-overlay库"}]


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
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );
        return (
            <Col md={12}>
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0,borderColor: "transparent"}} >
                    <pre><code className="hljs javascript">{ code }</code></pre>
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
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
