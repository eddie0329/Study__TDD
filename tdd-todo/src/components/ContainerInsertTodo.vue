<template>
  <el-row>
    <el-col :span="16">
      <el-input clearable></el-input>
    </el-col>
    <el-col :span="4">
      <primary-button>ADD</primary-button>
    </el-col>
  </el-row>
</template>

<script>
import PrimaryButton from './PrimaryButton.vue';

export default {
  name: 'ContainerInsertTodo',
  components: {
    PrimaryButton,
  },
};
</script>
