/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
import CheckButton from '../components/CheckButton.vue';

storiesOf('CheckButton', module)
  .add('Not Done', () => ({
    data: () => ({
      isTodoDone: false,
    }),
    components: {
      CheckButton,
    },
    methods: {
      onClickCheckbtn() {
        this.isTodoDone = !this.isTodoDone;
      },
    },
    template: `
    <CheckButton :is-todo-done="isTodoDone" @click="onClickCheckbtn"/>
  `,
  }))
  .add('Done', () => ({
    components: {
      CheckButton,
    },
    template: `
    <CheckButton :is-todo-done="true" />
  `,
  }));
