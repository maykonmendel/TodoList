import Vue from 'vue';
import App from './App.vue';
import {
    PhPlus,
    PhCheckSquareOffset,
    PhBookmarks,
    PhWarning,
} from 'phosphor-vue';
import TaskComponent from './components/Task';
import ItemTask from './components/Item';

Vue.config.productionTip = false;

//Icons
Vue.component('ph-plus', PhPlus);
Vue.component('ph-check-square-offset', PhCheckSquareOffset);
Vue.component('ph-bookmarks', PhBookmarks);
Vue.component('ph-warning', PhWarning);

//Components
Vue.component('task-component', TaskComponent);
Vue.component('item-task', ItemTask);

new Vue({
    render: (h) => h(App),
}).$mount('#app');
