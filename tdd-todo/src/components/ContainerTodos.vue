<template>
  <el-row>
    <ListTodo
      v-for="id of todoIds"
      :key="id"
      :todo="todos[id]"
      @remove="removeTodo(id)"
      @update="changeTodoStatus(id)"
    />
  </el-row>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { REMOVE_TODO, CHANGE_TODO_STATUS } from '../store/modules/todos';
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
    ...mapActions('todos', { removeTodo: REMOVE_TODO, changeTodoStatus: CHANGE_TODO_STATUS }),
  },
};
</script>
