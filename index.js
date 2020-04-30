import $ from 'jquery'
import './css/1.css'
import './css/1.less'
import './css/1.scss'
//导入单文件组件
// import APP from './components/APP.vue'

$(function () {
    $('li:odd').css('backgroundColor', 'green')
    $('li:even').css('backgroundColor', 'lightblue')
})

class Person {
    static info = 'aaa'
}

console.log(Person.info)

// --------------------------------
// vue的基本使用步骤
import Vue from 'vue'
//导入单文件组件
import App from './components/App.vue'

const vm = new Vue({
    el: '#app',
    render: h => h(App)
})