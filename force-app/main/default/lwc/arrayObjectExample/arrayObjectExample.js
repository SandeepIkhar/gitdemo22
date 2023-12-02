import { LightningElement, track } from 'lwc';

export default class ArrayObjectExample extends LightningElement {
    @track tasks = [];
    newTask = '';

    handleTaskChange(event) {
        this.newTask = event.target.value;
    }

    addTask() {
        if (this.newTask) {
            this.tasks.push({ id: Date.now(), title: this.newTask, completed: false });
            this.newTask = '';
        }
    }

    handleCompleteTask(event) {
        const index = event.target.dataset.index;
        this.tasks[index].completed = true;
        this.tasks = [...this.tasks]; // Trigger reactivity
    }

    handleDeleteTask(event) {
        const index = event.target.dataset.index;
        this.tasks.splice(index, 1);
        this.tasks = [...this.tasks]; // Trigger reactivity
    }
}