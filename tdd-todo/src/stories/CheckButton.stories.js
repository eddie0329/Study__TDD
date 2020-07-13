/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
import CheckButton from '../components/CheckButton.vue';

storiesOf('CheckButton', module).add('Not Done', () => ({
  components: {
    CheckButton,
  },
  template: `
    <CheckButton :is-todo-done="false"/>
  `,
})).add('Done', () => ({
  components: {
    CheckButton,
  },
  template: `
    <CheckButton :is-todo-done="true" />
  `,
}));
