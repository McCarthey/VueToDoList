import Vue from 'vue'
import App from './App.vue'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-light.css' // 使用 XXX 主题
import colorPicker from './vue-color-picker' //引入colorPicker组件

Vue.use(MuseUI)
    // 使用colorPicker组件
Vue.use(colorPicker)

new Vue({
    el: '#app',
    render: h => h(App)
})