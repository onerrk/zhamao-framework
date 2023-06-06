(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{702:function(a,s,e){"use strict";e.r(s);var r=e(83),t=Object(r.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"框架高级启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#框架高级启动"}},[a._v("#")]),a._v(" 框架高级启动")]),a._v(" "),s("h2",{attrs:{id:"框架安装方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#框架安装方式"}},[a._v("#")]),a._v(" 框架安装方式")]),a._v(" "),s("p",[a._v("框架提供了多种安装和运行的方式。")]),a._v(" "),s("ul",[s("li",[a._v("Composer 库引入模式")]),a._v(" "),s("li",[a._v("源码模式")]),a._v(" "),s("li",[a._v("Phar Composer 库引入模式")]),a._v(" "),s("li",[a._v("Phar 源码模式")]),a._v(" "),s("li",[a._v("单文件模式")])]),a._v(" "),s("h3",{attrs:{id:"composer-库引入模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#composer-库引入模式"}},[a._v("#")]),a._v(" Composer 库引入模式")]),a._v(" "),s("p",[a._v("框架在最初的指南教程中，给出的安装方式是 Composer 库引入模式，这种模式安装框架也是比较灵活的。\nComposer 库引入模式，顾名思义就是把框架本体当作一个 Composer 库来引入，这样就可以通过 Composer 来管理框架的版本，例如使用 "),s("code",[a._v("composer update")]),a._v(" 更新。")]),a._v(" "),s("p",[a._v("Composer 库引入模式的文件夹结构如下，我们假设你的项目目录为 "),s("code",[a._v("/root/zhamao-v3")]),a._v("：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("/root/zhamao-v3/\n├── composer.json           // 引入框架和项目的 composer.json 描述文件\n├── composer.lock           // Composer 生成的 lock 文件\n├── config/                 // 炸毛框架依赖的全局配置文件\n│   ├── global.php          // 全局配置文件，大部分配置项在这里配置\n│   ├── container.php       // 框架的容器配置文件\n│   └── motd.txt            // 框架启动时的 MOTD 提示语\n├── plugins/                // 开发者编写和安装的插件目录\n│   ├── example/            // 插件示例，这里以名称为 example 的插件为例\n│   │   ├── main.php        // 这个插件使用了单文件格式，main.php 为插件的核心代码\n│   │   └── composer.json   // 这个文件描述了炸毛框架插件的元信息，包括插件名称、版本、作者等\n├── vendor/                 // 你自身项目的依赖库，由 Composer 生成\n│   ├── zhamao/             \n│   │   └── framework/      // 框架的本体源码根目录\n│   │       ├── src/ZM/     // 框架的核心代码\n│   │       └── ......      // 框架的根目录其他文件\n│   └── .......             // 其他依赖库\n├── zhamao                  // 启动炸毛框架的入口文件\n└── zm_data/                // 存放框架依赖的持久化数据目录，如日志、缓存等\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br")])]),s("h3",{attrs:{id:"源码模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#源码模式"}},[a._v("#")]),a._v(" 源码模式")]),a._v(" "),s("p",[a._v("源码模式不是指开发者的源码，而是框架的源码。也就是说，源码模式是从 GitHub 直接拉取框架源码仓库后使用框架的模式。\n源码模式允许你对框架本身进行一系列修改，框架本体就可以直接运行。例如，你可以在框架的源码中添加一些自己的代码，或者修改框架的某些功能。")]),a._v(" "),s("p",[a._v("源码模式的结构和 Composer 库引入模式有些许不同，因为框架本身就是一个项目，所以它的目录结构也是一个项目的目录结构。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("/root/zhamao-framework/\n├── composer.json           // 框架本身的 composer.json\n├── composer.lock           // Composer 生成的 lock 文件\n├── config/                 // 炸毛框架依赖的全局配置文件\n│   ├── global.php          // 全局配置文件，大部分配置项在这里配置\n│   ├── container.php       // 框架的容器配置文件\n│   └── motd.txt            // 框架启动时的 MOTD 提示语\n├── plugins/                // 开发者编写和安装的插件目录\n│   ├── example/            // 插件示例，这里以名称为 example 的插件为例\n│   │   ├── main.php        // 这个插件使用了单文件格式，main.php 为插件的核心代码\n│   │   └── composer.json   // 这个文件描述了炸毛框架插件的元信息，包括插件名称、版本、作者等\n├── src/                    // 框架的本体源码根目录\n│   ├── ZM/                 // 框架的核心代码\n│   └── ......              // 框架的根目录其他文件\n├── vendor/                 // 框架本身依赖的 Composer 库文件夹\n│   └── .......             // 其他依赖库\n├── zhamao                  // 启动炸毛框架的入口文件\n└── zm_data/                // 存放框架依赖的持久化数据目录，如日志、缓存等\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br")])]),s("p",[a._v("源码模式下你可以在 "),s("code",[a._v("src/")]),a._v(" 目录编写你的项目或修改框架源码运行，此时在 "),s("code",[a._v("src/")]),a._v(" 下的代码虽然在设置 psr-4 自动加载后会被框架解析，但在该目录下的代码不属于插件的范畴。\n如果你不喜欢在插件的形式下开发自己的功能，也可以直接在 src 目录下编写代码。这种方式除了源码模式外，Composer 库引入模式下也可以在你的目录新建一个 "),s("code",[a._v("src/")]),a._v(" 文件夹并设置自动加载，\n以实现在非插件环境下加载你的项目。")]),a._v(" "),s("h3",{attrs:{id:"phar-模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#phar-模式"}},[a._v("#")]),a._v(" Phar 模式")]),a._v(" "),s("p",[a._v("Phar 模式的意思是将框架和依赖的相关 Composer 库打包为一个可直接使用的 Phar 文件，框架必需的依赖（除 PECL 扩展外）均被包含在一个文件内，方便框架本体分发。")]),a._v(" "),s("p",[a._v("Phar 模式主要面向发布到生产环境和减少小文件，但使用 Phar 模式不便于依赖的更新，所有依赖的库将锁定在打包时的版本。")]),a._v(" "),s("p",[a._v("Phar 模式也分两个小种类，Composer 库引入模式和源码模式。如果你不关注框架本体目录，仅开发功能，无论使用插件形式还是 "),s("code",[a._v("src/")]),a._v(" 形式，那么在使用上这两种方式没有区别。")]),a._v(" "),s("p",[a._v("框架在未来发布版本时，会同时发布一个打包好的 Phar 版本，你可以直接下载使用。")]),a._v(" "),s("p",[a._v("在使用 Phar 时，你的目录结构可能为这样：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("/root/your-zhamao-app/\n├── plugins/                // 开发者编写和安装的插件目录\n│   ├── example/            // 插件示例，这里以名称为 example 的插件为例\n│   │   ├── main.php        // 这个插件使用了单文件格式，main.php 为插件的核心代码\n│   │   └── composer.json   // 这个文件描述了炸毛框架插件的元信息，包括插件名称、版本、作者等\n├── config/                 // 配置文件目录\n├── zhamao.phar             // 炸毛框架本体的 Phar\n├── zm_data/                // 存放框架依赖的持久化数据目录，如日志、缓存等\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("h3",{attrs:{id:"单文件模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单文件模式"}},[a._v("#")]),a._v(" 单文件模式")]),a._v(" "),s("p",[a._v("单文件模式和 Phar 模式几乎一样，单文件模式为一个单独的二进制文件，这个二进制文件使用 phpmicro 项目的打包功能将 php-cli 和炸毛框架的 Phar 合成为一个文件，\n即可直接使用。这种方式的好处是不需要额外的 php-cli 环境，但是文件体积会比 Phar 模式大一些。")]),a._v(" "),s("h2",{attrs:{id:"框架启动参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#框架启动参数"}},[a._v("#")]),a._v(" 框架启动参数")]),a._v(" "),s("p",[a._v("框架启动时可以传入一些参数，这些命令行参数是用于框架启动时的配置。")]),a._v(" "),s("blockquote",[s("p",[a._v("这里框架启动参数指的是 "),s("code",[a._v("./zhamao server")]),a._v(" 启动框架的参数，而不是 "),s("code",[a._v("./zhamao")]),a._v(" 命令的参数。有关 "),s("code",[a._v("./zhamao")]),a._v(" 命令的其他功能，可以参考 "),s("RouterLink",{attrs:{to:"/components/common/cli.html"}},[a._v("组件 - 命令行")]),a._v("。")],1)]),a._v(" "),s("h3",{attrs:{id:"config-dir"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#config-dir"}},[a._v("#")]),a._v(" --config-dir")]),a._v(" "),s("p",[a._v("指定配置文件目录，如果不指定，框架会使用默认的配置文件目录。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("./zhamao server --config-dir"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/path/to/your/config/dir\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"driver"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#driver"}},[a._v("#")]),a._v(" --driver")]),a._v(" "),s("p",[a._v("指定框架使用的驱动，目前支持 "),s("code",[a._v("swoole")]),a._v(" 和 "),s("code",[a._v("workerman")]),a._v(" 两种驱动，如果不指定，框架会采用 "),s("code",[a._v("config/global.php")]),a._v(" 配置文件内的驱动。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("./zhamao server "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--driver")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("swoole\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"log-level"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#log-level"}},[a._v("#")]),a._v(" --log-level")]),a._v(" "),s("p",[a._v("指定框架组件 zhamao/logger 显示日志的等级。logger 组件符合 psr-3 日志接口，支持设置 8 个等级：")]),a._v(" "),s("p",[s("code",[a._v("emergency")]),a._v("、"),s("code",[a._v("alert")]),a._v("、"),s("code",[a._v("critical")]),a._v("、"),s("code",[a._v("error")]),a._v("、"),s("code",[a._v("warning")]),a._v("、"),s("code",[a._v("notice")]),a._v("、"),s("code",[a._v("info")]),a._v("、"),s("code",[a._v("debug")]),a._v("。")]),a._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("注意")]),a._v(" "),s("p",[a._v("如果你想采用其他 psr-3 日志组件，此配置无效。")])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("./zhamao server --log-level"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("debug\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"daemon"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#daemon"}},[a._v("#")]),a._v(" --daemon")]),a._v(" "),s("p",[a._v("以守护进程模式启动框架。此参数将直接在输出 motd 后将进程挂到 init 下运行，后台常驻。")]),a._v(" "),s("blockquote",[s("p",[a._v("单进程模式下，此参数无效。")])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("./zhamao server "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--daemon")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 执行后，你可以退出当前终端而不退出框架")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"worker-num"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#worker-num"}},[a._v("#")]),a._v(" --worker-num")]),a._v(" "),s("p",[a._v("指定框架启动的 worker 进程数。未指定时默认采用 "),s("code",[a._v("config/global.php")]),a._v(" 下对应驱动的配置（默认为 1）。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("./zhamao server --worker-num"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("注意")]),a._v(" "),s("ul",[s("li",[a._v("在启动多 worker 时，需要注意无法使用 LightCache，必须切换为 KVRedis 等支持跨进程的组件。")]),a._v(" "),s("li",[a._v("Windows 环境不支持设置进程数。")])])]),a._v(" "),s("h3",{attrs:{id:"watch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#watch"}},[a._v("#")]),a._v(" --watch")]),a._v(" "),s("p",[a._v("启动框架的热更新，并启用调试模式。")]),a._v(" "),s("blockquote",[s("p",[a._v("此功能暂未完成，敬请期待。")])]),a._v(" "),s("h3",{attrs:{id:"env"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#env"}},[a._v("#")]),a._v(" --env")]),a._v(" "),s("p",[a._v("设置环境类型 (production, development, staging)。")]),a._v(" "),s("p",[a._v("如果不设置此参数，框架默认使用 development 环境类型。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("./zhamao server "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--env")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("production\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"disable-safe-exit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#disable-safe-exit"}},[a._v("#")]),a._v(" --disable-safe-exit")]),a._v(" "),s("p",[a._v("禁用安全退出。如果不设置此参数，框架会在收到 SIGINT 信号时，等待所有请求处理完毕后再退出。\n设置此参数后，使用键盘 Ctrl+C 会立刻停止所有进程，不会执行退出框架的正常流程，例如保存 LightCache 持久化数据等。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("./zhamao server --disable-safe-exit\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"no-state-check"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#no-state-check"}},[a._v("#")]),a._v(" --no-state-check")]),a._v(" "),s("p",[a._v("取消框架在启动前的重复启动检查。如果不设置此参数，框架会在启动前检查是否有其他进程正在运行，如果有则会退出。\n设置此参数后，框架会忽略重复启动检查，可能会导致多个框架进程同时运行。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("./zhamao server --no-state-check\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"private-mode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#private-mode"}},[a._v("#")]),a._v(" --private-mode")]),a._v(" "),s("p",[a._v("启动时隐藏框架的配置信息和 MOTD，避免打印到终端。配合 logger 组件的选项可以达到启动时除紧急日志外没有任何输出内容到终端。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("./zhamao server --private-mode\n./zhamao server --private-mode --log-level"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("emergency\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);