import { inject, Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from './task.model';
import { LoggingService } from '../logging.service';

// @Injectable({
//     providedIn: 'root'
// })

export class TaskService {
  private tasks = signal<Task[]>([]);
  private logginService = inject(LoggingService);

  allTasks = this.tasks.asReadonly();

  addTask(taskData: { title: string; description: string }) {
    const newTask = {
      ...taskData,
      id: Math.random().toString(),
      status: 'OPEN',
    };
    this.tasks.update(oldTasks => [...oldTasks, { ...newTask, status: newTask.status as TaskStatus }]);
    this.logginService.log('Added new task: ' + taskData.title);
  }

  updateTaskStatus(taskId: string, newStatus: TaskStatus) {
    this.tasks.update(oldTasks => oldTasks.map(task => (task.id === taskId ? { ...task, status: newStatus } : task)));
    this.logginService.log('Updated task status: ' + newStatus);
  }
}
