import { configure } from '@storybook/vue';
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);


configure(require.context('../src/', true, /\.stories\.js$/), module);
