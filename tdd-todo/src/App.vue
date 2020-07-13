<template>
  <div id="app">
    <ContainerInsertTodo />
    <ContainerTodos />
  </div>
</template>

<script>
import ContainerInsertTodo from './components/ContainerInsertTodo.vue';
import ContainerTodos from './components/ContainerTodos.vue';

export default {
  name: 'App',
  components: {
    ContainerInsertTodo,
    ContainerTodos,
  },
};
</script>
