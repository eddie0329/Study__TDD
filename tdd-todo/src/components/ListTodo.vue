<template>
  <el-row class="list-todo" data-cy="listTodo">
    <el-col :span="2">
      <CheckButton :is-todo-done="todo.isTodoDone" @click="$emit('update')" data-cy="checkBtn"/>
    </el-col>
    <el-col :span="14">
      <el-input :disabled="true" :value="todo.title"></el-input>
    </el-col>
    <el-col :span="4">
      <DeleteButton @click="$emit('remove')" />
    </el-col>
  </el-row>
</template>

<script>
import CheckButton from './CheckButton.vue';
import DeleteButton from './DeleteButton.vue';

export default {
  name: 'ListTodo',
  props: {
    todo: {
      type: Object,
    },
  },
  components: {
    CheckButton,
    DeleteButton,
  },
};
</script>
