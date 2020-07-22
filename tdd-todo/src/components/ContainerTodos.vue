<template>
  <el-row>
    <ListTodo
      v-for="id of todoIds"
      :key="id"
      :todo-title="todos[id].title"
      @remove="removeTodo(id)"
    />
  </el-row>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { REMOVE_TODO } from '../store/modules/todos';
import ListTodo from './ListTodo.vue';

export default {
  name: 'ContainerTodos',
  components: {
    ListTodo,
  },
  computed: {
    ...mapState('todos', ['todoIds', 'todos']),
  },
  methods: {
    ...mapActions('todos', { removeTodo: REMOVE_TODO }),
  },
};
</script>
