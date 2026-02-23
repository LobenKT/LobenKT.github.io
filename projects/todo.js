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
            this.tasks.push({ 
                text: this.newTask, 
                completed: false,
                id: Date.now()
            });
            this.newTask = "";
            this.saveTasks();
        },
        toggleComplete(index) {
            this.tasks[index].completed = !this.tasks[index].completed;
            this.saveTasks();
        },
        deleteTask(index) {
            this.tasks.splice(index, 1);
            this.saveTasks();
        },
        saveTasks() {
            localStorage.setItem('todoTasks', JSON.stringify(this.tasks));
        },
        loadTasks() {
            const saved = localStorage.getItem('todoTasks');
            if (saved) {
                try {
                    this.tasks = JSON.parse(saved);
                } catch (e) {
                    console.error('Error loading tasks:', e);
                    this.tasks = [];
                }
            }
        },
        clearCompleted() {
            this.tasks = this.tasks.filter(task => !task.completed);
            this.saveTasks();
        }
    },
    computed: {
        completedCount() {
            return this.tasks.filter(task => task.completed).length;
        },
        activeCount() {
            return this.tasks.filter(task => !task.completed).length;
        }
    },
    mounted() {
        this.loadTasks();
    }
});

app.mount("#app");
