<template>
  <div id="app">
    <ContainerInsertTodo />
    <ContainerTodos />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { GET_TODOS } from './store/modules/todos';
import ContainerInsertTodo from './components/ContainerInsertTodo.vue';
import ContainerTodos from './components/ContainerTodos.vue';

export default {
  name: 'App',
  async created() {
    await this.getTodos();
  },
  components: {
    ContainerInsertTodo,
    ContainerTodos,
  },
  methods: {
    ...mapActions('todos', { getTodos: GET_TODOS }),
  },
};
</script>
