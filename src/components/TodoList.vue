<template>
  <div>
    <div
      v-for="todo in todoList"
      :key="todo.id + todo.title"
    >
      <TodoItem :todo="todo" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TodoItem from '@/components/TodoItem';

export default {
  components: {
    TodoItem,
  },

  computed: {
    ...mapState(['todoList']),
  },
};
</script>
