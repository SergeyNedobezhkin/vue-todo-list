<template>
  <div>
    <TodoInput />
    <TodoList />
  </div>
</template>

<script>
import TodoInput from "@/components/Todo/TodoInput";
import TodoList from "@/components/Todo/TodoList.vue";
export default {
  name: "TodoHome",
  components: {
    TodoInput,
    TodoList,
  },
};
</script>

<style lang="scss" scoped></style>
