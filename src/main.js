import Vue from  'vue'
import App from  './App.vue'

new Vue({
  el:'#app',
  // component:{ App },
  template: '<App/>',
  render:h => h(App)
})
