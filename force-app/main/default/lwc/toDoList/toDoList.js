import { LightningElement, track } from 'lwc';

export default class ToDoList extends LightningElement {

    @track newTask = '';
    @track tasks = [];
    @track errorMessage = '';

    handleTaskChange(event) {
        this.newTask = event.target.value;
        this.errorMessage = '';
    }

    addTask() {
        if (this.newTask) {
            if (this.tasks.length < 5) {
                const newId = Date.now();
                this.tasks.push({ id: newId, name: this.newTask });
                this.newTask = '';
            } else {
                this.errorMessage = 'You can only have 5 tasks at a time.';
            }
        }
    }

    handleDeleteTask(event) {
        const taskId = event.currentTarget.dataset.id;
        this.tasks = this.tasks.filter(task => task.id != taskId);
    }


}