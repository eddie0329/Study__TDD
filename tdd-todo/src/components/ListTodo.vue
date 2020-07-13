<template>
  <el-row class="list-todo">
    <el-col :span="4">
      <CheckButton />
    </el-col>
    <el-col :span="12">
      <el-input></el-input>
    </el-col>
    <el-col :span="4">
      <DeleteButton />
    </el-col>
  </el-row>
</template>

<script>
import CheckButton from './CheckButton.vue';
import DeleteButton from './DeleteButton.vue';

export default {
  name: 'ListTodo',
  components: {
    CheckButton,
    DeleteButton,
  },
};
</script>
