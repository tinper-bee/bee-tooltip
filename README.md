# bee-tooltip
[![npm version](https://img.shields.io/npm/v/bee-tooltip.svg)](https://www.npmjs.com/package/bee-tooltip)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-tooltip/master.svg)](https://travis-ci.org/tinper-bee/bee-tooltip)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-tooltip/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-tooltip?branch=master)

react bee-tooltip component for tinper-bee

#### setup develop environment

```sh
$ git clone https://github.com/tinper-bee/bee-tooltip
$ cd bee-tooltip
$ npm install
$ npm run dev
```

## 使用

### 使用单独的tooltip包
#### 组件引入
先进行下载tooltip包
```
npm install --save bee-tooltip
```
组件调用
```js
import { Tooltip } from 'bee-tooltip';
React.render(<div>
    <div>
        <Tooltip placement="top" className="in">show tooltip</Tooltip>
    </div>
</div>, document.getElementById('target'));
```
#### 样式引入
- 可以使用link引入dist目录下tooltip.css
```
<link rel="stylesheet" href="./node_modules/build/bee-tooltip.css">
```
- 可以在js中import样式
```js
import "./node_modules/src/tooltip.scss"
//或是
import "./node_modules/build/bee-tooltip.css"
```

### 使用tinper-bee组件库
(tinper-bee组件库使用方法)[]




## API
|参数|说明|类型|默认值|
|---|----|---|------|
|palcement|显示位置(`top` `left` `right` `bottom`)|string|top|
|inverse|反白显示|bool|false|
|className|增加额外的class(in,'')|string|''默认隐藏
