<template>
  <div class="d-flex">
    <input
      v-model="todoName"
      class="d-flex form-control input-name"
      type="text"
    />

    <button
      class="btn btn-primary btn-add"
      :class="buttonClasses"
      @click="addTodo"
    >
      Добавить
    </button>

    <button
      v-show="todoList.length"
      class="btn btn-primary"
      @click="clearTodoList"
    >
      Очистить
    </button>
  </div>
</template>

<script>
import { uniqueId } from 'lodash';
import { mapState } from 'vuex';

export default {
  data() {
    return {
      todoName: '',
    };
  },

  computed: {
    ...mapState(['todoList']),

    buttonClasses() {
      return {
        'disabled': !this.todoName,
      }
    }
  },

  methods: {
    addTodo() {
      const payload = {
        id: uniqueId(this.todoName),
        title: this.todoName,
      };

      this.$store.dispatch('addTodo', payload);

      this.todoName = '';
    },

    clearTodoList() {
      this.$store.dispatch('clearTodoList');
    }
  },
};
</script>

<style scoped>
.input-name {
  width: 900px;
}

.btn {
  margin-left: 10px;
}

.disabled {
  pointer-events: none;
  opacity: 0.7;
}
</style>
