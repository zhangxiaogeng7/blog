(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{374:function(t,s,a){"use strict";a.r(s);var r=a(42),n=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"antd4-umi3框架入门教程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#antd4-umi3框架入门教程"}},[t._v("#")]),t._v(" Antd4+umi3框架入门教程")]),t._v(" "),a("h3",{attrs:{id:"ant-design介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ant-design介绍"}},[t._v("#")]),t._v(" Ant Design介绍")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://ant.design/index-cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://ant.design/index-cn"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("**Ant Design是基于React实现的一套组件库。**组件（component）到底是什么东西？")]),t._v(" "),a("p",[t._v("如果你经常浏览各种网站，就会发现不管网页的主题是什么，通常都会使用一些重复出现的构件，比如日历、表格、表单、菜单、卡片、导航栏等等。这些构件的功能和外观都很类似，只是在一些细节的地方，根据需要做了定制。它们就叫做组件，一张完整的网页，可以看做是不同功能的组件的集合。")]),t._v(" "),a("h3",{attrs:{id:"react-介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-介绍"}},[t._v("#")]),t._v(" React 介绍")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://react.docschina.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://react.docschina.org/"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("React 是 Facebook 公司开发推出的一套"),a("strong",[t._v("前端开发框架")]),t._v("，是目前全世界最流行的前端框架。它的核心理念是将网页应用看成一个组件构成的状态机（state machine），状态的变化导致了 UI 的变化。")]),t._v(" "),a("p",[t._v("Ant Design 是基于 React 开发的。要使用 Ant Design，必须学会 React。")]),t._v(" "),a("h3",{attrs:{id:"umi介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#umi介绍"}},[t._v("#")]),t._v(" Umi介绍")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://umijs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://umijs.org/"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Umi，中文可发音为乌米, 是蚂蚁金服体验技术部推出的编译打包工具。React 组件使用的是 JSX 语法和很多新的 ES6 语法，浏览器不支持。另外，不同的组件脚本必须打包在一起，浏览器才能加载。umi，封装了编译步骤，包括了很多开发时的有用工具。只要你写好 React 代码，接下来 umi 就会把它处理为生产代码。")]),t._v(" "),a("h3",{attrs:{id:"一、初始化项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、初始化项目"}},[t._v("#")]),t._v(" 一、初始化项目")]),t._v(" "),a("h4",{attrs:{id:"开发环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发环境"}},[t._v("#")]),t._v(" 开发环境")]),t._v(" "),a("p",[t._v("1、首先安装"),a("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("NodeJs"),a("OutboundLink")],1),t._v("。NodeJS 是一个 JS 执行环境，umi 基于 JS 编写，并且需要在你的开发机上运行，所以依赖于它。安装完成，执行下面的命令确认是否安装成功")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("    node "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("v\n    npm "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("v\n")])])]),a("blockquote",[a("p",[t._v("在 umi 中我们采用了一些 NodeJS 的新特性， Umi 3 需要 Node 10.13 或以上,请确保你的 NodeJS 版本大于等于 "),a("strong",[t._v("10.13")]),t._v("。")])]),t._v(" "),a("p",[t._v("2、安装umi依赖")]),t._v(" "),a("p",[t._v("首先，新建项目文件夹，然后初始化"),a("strong",[t._v("package.json")]),t._v("，存放项目信息和配置等信息的文件")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("mkdir antdumi "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" cd antdumi\nnpm init "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("y\n")])])]),a("p",[t._v("上面命令中，参数 "),a("strong",[t._v("-y")]),t._v(" 表示对 npm 要求提供的信息，都自动按下回车键，表示接受默认值。")]),t._v(" "),a("p",[t._v("接着，安装 "),a("strong",[t._v("umi")]),t._v(" 的依赖。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("npm install umi "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("save"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("dev\n")])])]),a("p",[t._v("安装完成之后你会发现 "),a("strong",[t._v("package.json")]),t._v(" 中多出了一项 "),a("strong",[t._v("devDependencies")]),t._v(" 的配置。这是由于在上面命令中，参数 "),a("strong",[t._v("--save")]),t._v(" 可以让依赖信息保存到 "),a("strong",[t._v("package.json")]),t._v(" 中，这样其它开发者下载代码后就只需要执行 "),a("code",[t._v("npm install")]),t._v(" 后就会自动安装项目依赖的包。"),a("br"),t._v("\n另外项目中还多出了一个 "),a("strong",[t._v("node_modules")]),t._v(" 的文件夹，它包含了大量的内容。里面存放的是项目依赖的包，umi 的代码也是被下载并安装到其中的。如果你想要了解更多，可以参考 "),a("a",{attrs:{href:"https://docs.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm 的文档。"),a("OutboundLink")],1)]),t._v(" "),a("h4",{attrs:{id:"创建第一个hello-world页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建第一个hello-world页面"}},[t._v("#")]),t._v(" 创建第一个hello world页面")]),t._v(" "),a("p",[t._v("1、在 "),a("strong",[t._v("umi")]),t._v(" 中，大量的使用了"),a("strong",[t._v("配置和约定")]),t._v("来帮助你快速开发代码。首先，我们先来创建配置文件。配置文件被约定为 "),a("strong",[t._v("config/config.js")]),t._v("。配置可参考umi的"),a("a",{attrs:{href:"https://umijs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("strong",[t._v("config/config.js")]),t._v(" 中初始化的内容如下：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("2、首先在项目里创建"),a("strong",[t._v("src")]),t._v("目录，用来存放项目除了配置以及单测以外的主要代码。")]),t._v(" "),a("p",[t._v("在 umi 中，约定的存放页面代码的文件夹是 "),a("strong",[t._v("pages")]),t._v("，是复数，不过如果你喜欢单数的话你配置项中你可以添加 "),a("strong",[t._v("singular")]),t._v(" 为 "),a("strong",[t._v("true")]),t._v(" 来让 "),a("strong",[t._v("page")]),t._v(" 变为约定的文件夹。在本课程中我们使用单数来作为约定目录。所以你需要修改配置文件为：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        singular： "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("3、在page文件下创建HelloWorld.js文件，代码如下：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("hello world"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("4、下面通过umi启动代码了，在"),a("strong",[t._v("package.json")]),t._v("中的"),a("strong",[t._v("scripts")]),t._v("里面添加启动命令和构建代码命令：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dev"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"umi dev"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"umi build"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("5、等项目运行起来，在浏览器中输入，"),a("strong",[t._v("http://localhost:8000/helloworld")]),t._v("(端口可能因为被占用或者其他原因不同，按照实际输入),然后将会看到显示啦")]),t._v(" "),a("p",[a("strong",[t._v("在 umi 中，你可以使用约定式的路由，在 page 下面的 JS 文件都会按照文件名映射到一个路由，比如上面这个例子，访问 /helloworld 会对应到 HelloWorld.js。也可以在配置文件config/config.js中配置")])]),t._v(" "),a("h3",{attrs:{id:"二、react创建第一个组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、react创建第一个组件"}},[t._v("#")]),t._v(" 二、React创建第一个组件")]),t._v(" "),a("h4",{attrs:{id:"组件定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件定义"}},[t._v("#")]),t._v(" 组件定义")]),t._v(" "),a("p",[t._v('组件允许将UI分为独立可服用的代码片段，并对每个片段进行独立构思。组件从概念上类似于JavaScript函数。它接受任意的入参（即"props"），并返回用于描述页面展示内容的React元素。在React中我们使用更正式、更通用的'),a("strong",[t._v("ES6的class")]),t._v("来定义组件")]),t._v(" "),a("h4",{attrs:{id:"react组件语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react组件语法"}},[t._v("#")]),t._v(" React组件语法")]),t._v(" "),a("ul",[a("li",[t._v("组件名称必须以大写字母开头")]),t._v(" "),a("li",[t._v("继承React.Component基类，重写render方法返回需要展示在屏幕上的视图层次结构，用于输出")]),t._v(" "),a("li",[t._v("组件内部状态： "),a("code",[t._v("this.state")]),t._v("（state可更新）")]),t._v(" "),a("li",[t._v("组件参数传值："),a("code",[t._v("this.props")]),t._v("(props只读性)")])]),t._v(" "),a("h4",{attrs:{id:"jsx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsx"}},[t._v("#")]),t._v(" JSX")]),t._v(" "),a("p",[t._v("jsx是一个JavaScript的语法扩展，JSX可以很好地描述UI应该呈现出它应有交互的本质形式。")]),t._v(" "),a("h4",{attrs:{id:"jsx语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsx语法"}},[t._v("#")]),t._v(" jsx语法")]),t._v(" "),a("ul",[a("li",[t._v("标签必须闭合，点标签用/闭合")]),t._v(" "),a("li",[t._v("顶层只有一个标签")]),t._v(" "),a("li",[t._v("HTML原生标签使用小写、自定义的组件标签首字母要大写")]),t._v(" "),a("li",[t._v("允许js和html混写在一起，用{}进入js上下文")])]),t._v(" "),a("p",[t._v("注意：\n1、因为JSX语法上更接近JavaScript而不是HTML，所以JSX语法中使用"),a("code",[t._v("cameCase")]),t._v("（小驼峰明明）定义属性的名称，而不使用HTML属性名称的命名约定。\n例如：JSX里的"),a("code",[t._v("class")]),t._v("变成了"),a("code",[t._v("className")]),t._v("\n2、为了便于阅读，我们会将jsx拆分为多行。同时将内容包裹在括号中，这样可以避免遇到自动拆入分号的陷阱。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" React "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ShoppingList")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("React"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Component")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("   \n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            count"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div className"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wrapper"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("h2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Shopping List "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("h2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ul"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("li"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Instagram"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("li"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("li"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("WhatsApp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("li"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("li"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Oculus"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("li"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ul"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("button onClick"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("点击增加"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("button"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" ShoppingList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"react组件生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react组件生命周期"}},[t._v("#")]),t._v(" React组件生命周期")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("componentDidMount")]),t._v("：组件挂载后自动调用")]),t._v(" "),a("li",[a("code",[t._v("componentWillUnmount")]),t._v("：组件卸载前自动调用")]),t._v(" "),a("li",[a("code",[t._v("componentDidUpdate")]),t._v("：UI每次更新后调用")])]),t._v(" "),a("h3",{attrs:{id:"三、使用ant-design组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、使用ant-design组件"}},[t._v("#")]),t._v(" 三、使用Ant Design组件")]),t._v(" "),a("p",[t._v("通过前面的步骤，已经搭建完成了脚手架，并且了解了React的基本概念，下面来使用Ant Design组件。")]),t._v(" "),a("h4",{attrs:{id:"引入antd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引入antd"}},[t._v("#")]),t._v(" 引入antd")]),t._v(" "),a("p",[t._v("Ant Design 是一个服务于企业级产品的设计体系，组件库是它的 React 实现，antd 被发布为一个 npm 包方便开发者安装并使用。")]),t._v(" "),a("p",[t._v("1、添加 @umijs/preset-react 插件")]),t._v(" "),a("p",[t._v("umi 是一个可插拔的企业级 react 应用框架，它的很多功能都是通过插件实现。尤其是 umi 官方的 "),a("a",{attrs:{href:"https://umijs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("@umijs/preset-react"),a("OutboundLink")],1),t._v(" 这个插件集成了常用的一些进阶的功能，执行安装代码进行安装：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("npm install @umijs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("preset"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("react "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("save"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("dev\n")])])]),a("p",[t._v("2、配置 @umijs/preset-react 插件")]),t._v(" "),a("p",[t._v("使用了脚手架，Ant Design已经自带了，不需要自己安装了")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        antd"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        routes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            component"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./HelloWorld'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("3、使用antd\n在HelloWorld.js页面引入antd组件，首先在头部引入Card组件")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Card "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'antd'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("然后我们按照antd组件的API添加，"),a("a",{attrs:{href:"https://ant.design/components/overview-cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("组件API"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("想要详细地学习Antd4+umi3，"),a("a",{attrs:{href:"https://www.yuque.com/ant-design/course/lsoh4c",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击学习地址"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);