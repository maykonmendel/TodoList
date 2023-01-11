import Vue from 'vue';
import App from './App.vue';
import TaskComponent from './components/Task';

Vue.config.productionTip = false;

Vue.component('task-component', TaskComponent);

new Vue({
    render: (h) => h(App),
}).$mount('#app');
