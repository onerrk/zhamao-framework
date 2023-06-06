(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{735:function(a,s,t){"use strict";t.r(s);var e=t(83),i=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"插件管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插件管理"}},[a._v("#")]),a._v(" 插件管理")]),a._v(" "),s("p",[a._v("炸毛框架内置了插件管理功能。借助插件管理功能，你可以下载、管理、开发插件。\n插件像搭建积木一样快速构建自己的应用，在插件市场内的插件数量足够多的时候，你甚至可以不写任何一行代码来构建自己的应用。\n例如，引入机器人群管、机器人问答、对接 GPT 等 API 接口，也可以自己开发一个插件，发布到插件市场或 Composer。")]),a._v(" "),s("h2",{attrs:{id:"github-插件下载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github-插件下载"}},[a._v("#")]),a._v(" GitHub 插件下载")]),a._v(" "),s("p",[a._v("你可以到 "),s("RouterLink",{attrs:{to:"/plugins/market.html"}},[a._v("插件市场")]),a._v(" 下载并安装你心仪的插件，这些插件大部分为 OneBot 机器人适用的聊天机器人功能类插件。")],1),a._v(" "),s("p",[a._v("在安装框架后，可以使用 "),s("code",[a._v("./zhamao plugin:install https://github.com/xxx/yyy.git")]),a._v(" 样式的链接安装 GitHub 发布的插件。")]),a._v(" "),s("p",[a._v("这里以官方插件"),s("strong",[a._v("一言")]),a._v("为例子：")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("./zhamao plugin:install https://github.com/awesome-zhamao/hitokoto.git\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("在短暂等待后，出现 "),s("code",[a._v("插件 zhamao-plugin/hitokoto 安装成功！")]),a._v(" 的字样，即表示插件 "),s("code",[a._v("hitokoto")]),a._v(" 安装成功。")]),a._v(" "),s("p",[a._v("使用框架的安装命令安装插件均会使用 Composer 进行管理，例如上方在使用 "),s("code",[a._v("plugin:install")]),a._v(" 命令传入了 GitHub 仓库地址后，\n根据对应外部插件的 "),s("code",[a._v("composer.json")]),a._v(" 获取插件名称。")]),a._v(" "),s("p",[a._v("如果从 GitHub 下载插件时候提示你的 API 接口被限制速率，例如请求返回了非 200 的状态码，先需要到 GitHub 个人设置页面申请一个 "),s("code",[a._v("Classic Token")]),a._v("。\n然后使用命令参数 "),s("code",[a._v("--github-token=XXXXXXXXXXXXXX")]),a._v("，XXX替换为你的 Token 值，例如：")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("./zhamao plugin:install https://github.com/awesome-zhamao/hitokoto.git --github-token"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("fergv3w4t34tcx3w4tw45hw64\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"composer-插件下载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#composer-插件下载"}},[a._v("#")]),a._v(" Composer 插件下载")]),a._v(" "),s("p",[a._v("一般情况下，普通小插件可以使用 GitHub 仓库进行发布，如果你对插件的使用者体验比较在意，这里更推荐开发者将插件发布到 packagist.org。\n发布到 packagist.org 的插件我们称之为 Composer 插件，与 GitHub 插件不同的是，Composer 插件仅需使用 "),s("code",[a._v("xxx/yyy")]),a._v(" 名称直接安装。")]),a._v(" "),s("p",[a._v("这里还以官方的一言插件为例，如果使用 Composer 插件安装方式，使用命令：")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("./zhamao plugin:install zhamao-plugin/hitokoto\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("这里如果安装的是发布到 Composer 的插件，效果与 "),s("code",[a._v("composer require zhamao-plugin/hitokoto")]),a._v(" 是一样的。")]),a._v(" "),s("h2",{attrs:{id:"插件卸载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插件卸载"}},[a._v("#")]),a._v(" 插件卸载")]),a._v(" "),s("p",[a._v("如果你想移除某个从 Git、Composer 安装的炸毛框架插件，可以使用命令 "),s("code",[a._v("plugin:remove")]),a._v("（在 3.1.7 版本后可用）：")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("./zhamao plugin:remove zhamao-plugin/hitokoto\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("需要注意的是，这里只能用插件名称，不可以使用插件的 Git 仓库链接、插件文件夹等。")]),a._v(" "),s("h2",{attrs:{id:"插件列表展示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插件列表展示"}},[a._v("#")]),a._v(" 插件列表展示")]),a._v(" "),s("p",[a._v("使用命令 "),s("code",[a._v("plugin:list")]),a._v(" 可以查看当前框架安装了哪些插件，包含 Phar 插件、开发的插件、Composer 插件。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("./zhamao plugin:list\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("你也可以使用参数 "),s("code",[a._v("--name-list")]),a._v(" 来获取一个只有名称的插件列表：")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("./zhamao plugin:list --name-list\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])])])}),[],!1,null,null,null);s.default=i.exports}}]);