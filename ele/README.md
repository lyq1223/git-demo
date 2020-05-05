https://github.com/bailicangdu/vue2-elm

1. 入手，快速入手的视野
2. 注意细节

- rem
  css 中的相对单位
  是 html 的 font-size 所有设备自适应
  vue 单页应用中怎么做 rem 的适配，不能写死。希望 16rem=100%(动态宽度的 100%)
  16 就是引入了栅格系统，一行由 16 格组成 8:8(两列对等)
  html 得去做一个 fontsize 计算

引入 rem 生成框架 阿里有个 flexible

- 设计一个组件 header 组件

yarn add stylus stylus-loader 会自动启用 stylus 写样式

1. head 组件设计 css
   common.styl reset
   mixin.styl css 模块化，功能化
   封装 mixin
2.

# common

1. 组件开发
   weui 静态 ui 组件，静态页面；通用组件，两者无明确区别，功能上稍稍有一点区别。
   设计一些这样的组件，为未来写组件发布到 npm 做好准备，如何设计通用性组件？
   弹出一个提示框，新建一个 common/alertTip.vue
   借助 weui
   介绍一点 data 和 props 后，来到 App.vue

2. 画出图标 svg css
