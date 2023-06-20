<template>
  <div class="d-flex my-3 justify-content-between align-items-center">
    <h3 v-if="!isEditing">{{ todo.title }}</h3>

    <div v-else class="d-flex justify-content-between align-items-center col">
      <input
        v-model="todoName"
        type="text"
        class="col-7 form-control"
      />
    </div>

    <div class="row align-items-center btn-todo">
      <button
        v-if="isEditing"
        class="btn btn-primary"
        @click="updateTodo"
      >
        Обновить
      </button>

      <button
        v-else
        class="btn btn-primary"
        @click="editTodo"
      >
        Редактировать
      </button>

      <button
        class="btn btn-danger"
        @click="deleteTodo"
      >
        Удалить
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      todoName: '',
      isEditing: false,
    };
  },

  methods: {
    editTodo() {
      this.todoName = this.todo.title;
      this.isEditing = true;
    },

    updateTodo() {
      const payload = {
        id: this.todo.id,
        title: this.todoName,
      };

      this.$store.dispatch('editTodo', payload);
      this.isEditing = false;
    },

    deleteTodo() {
      this.$store.dispatch('deleteTodo', this.todo.id);
    },
  },
};
</script>

<style scoped leng="scss">
h3 {
  text-transform: capitalize;
}

.btn-todo {
  margin-right: 0px;
  width: 150px;
}

.btn-primary {
  margin-bottom: 2px;
}

.form-control {
  width: 95%;
}
</style>
