import { configure } from '@storybook/vue';
import Vue from 'vue';
import MyCounter from '../src/components/MyCounter';

Vue.component('my-counter', MyCounter);

configure(require.context('../src/components', true, /\.stories\.js$/), module);
