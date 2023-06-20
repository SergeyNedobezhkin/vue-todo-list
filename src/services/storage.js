export default {
    getTodoList: () => {
        return localStorage.getItem('todoList');
    },

    setTodoList: data => {
        localStorage.setItem('todoList', data);
    },

    clearTodoList: () => {
        localStorage.setItem('todoList', '[]');
    },
};