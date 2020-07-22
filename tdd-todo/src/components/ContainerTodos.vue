<template>
  <el-row>
    <ListTodo v-for="id of todoIds" :key="id" :todo-title="todos[id].title" />
  </el-row>
</template>

<script>
import { mapState } from 'vuex';
import ListTodo from './ListTodo.vue';

export default {
  name: 'ContainerTodos',
  components: {
    ListTodo,
  },
  computed: {
    ...mapState('todos', ['todoIds', 'todos']),
  },
};
</script>
