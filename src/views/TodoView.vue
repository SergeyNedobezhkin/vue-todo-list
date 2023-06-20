<template>
  <div>
    <h1>TODO Лист</h1>

    <TodoInput class="todo-input" />

    <h4 class="todo-count">Задач в работе: {{ todoList.length }}</h4>

    <TodoList class="todo-list" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";

export default {
  name: "TodoView",

  components: {
    TodoInput,
    TodoList,
  },

  computed: {
    ...mapState(["todoList"]),

    buttonClasses() {
      return {
        disabled: !this.todoName,
      };
    },
  },

  mounted() {
    this.$store.dispatch("getTodoList");
  },
};
</script>

<style scoped>
.todo-input {
  margin-top: 40px;
}

.todo-count {
  text-align: left;
  font-size: 20px;
  margin-top: 20px;
}

.todo-list {
  margin-top: 50px;
}
</style>
