<template>
  <div>
    <TodoInput />
    <TodoList />
  </div>
</template>

<script>
import TodoInput from "@/components/Todo/TodoInput";
import TodoList from "@/components/Todo/TodoList";

export default {
  name: "TodoHome",

  components: {
    TodoInput,
    TodoList,
  },
};
</script>
