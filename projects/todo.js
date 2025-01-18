const app = Vue.createApp({
    data() {
        return {
            newTask: "",
            tasks: []
        };
    },
    methods: {
        addTask() {
            if (this.newTask.trim() === "") return;
            this.tasks.push({ text: this.newTask, completed: false });
            this.newTask = "";
        },
        toggleComplete(index) {
            this.tasks[index].completed = !this.tasks[index].completed;
        },
        deleteTask(index) {
            this.tasks.splice(index, 1);
        }
    }
});

app.mount("#app");
