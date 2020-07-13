<template>
  <el-row>
    <ListTodo />
  </el-row>
</template>

<script>
import ListTodo from './ListTodo.vue';

export default {
  name: 'ContainerTodos',
  components: {
    ListTodo,
  },
};
</script>
