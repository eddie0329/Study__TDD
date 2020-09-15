/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
import ListTodo from '../components/ListTodo.vue';

storiesOf('ListTodo', module).add('Default', () => ({
  components: {
    ListTodo,
  },
  template: `
    <ListTodo />
  `,
}));
