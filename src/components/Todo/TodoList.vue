<template>
  <div>
    <div v-for="todo in allTodos" :key="todo.id">
      <TodoItem :todo="todo" />
    </div>
  </div>
</template>

<script>
import TodoItem from "@/components/Todo/TodoItem";
import { mapGetters } from "vuex";

export default {
  components: {
    TodoItem,
  },
  computed: {
    ...mapGetters(["allTodos"]),
  },
};
</script>

<style scoped></style>
