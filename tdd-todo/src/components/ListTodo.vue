<template>
  <el-row class="list-todo">
    <el-col :span="2">
      <CheckButton />
    </el-col>
    <el-col :span="14">
      <el-input :disabled="true" :value="todoTitle"></el-input>
    </el-col>
    <el-col :span="4">
      <DeleteButton @click="$emit('remove')"/>
    </el-col>
  </el-row>
</template>

<script>
import CheckButton from './CheckButton.vue';
import DeleteButton from './DeleteButton.vue';

export default {
  name: 'ListTodo',
  props: {
    todoTitle: {
      default: '',
      type: String,
    },
  },
  components: {
    CheckButton,
    DeleteButton,
  },
};
</script>
