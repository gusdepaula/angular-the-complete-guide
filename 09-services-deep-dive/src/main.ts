import { bootstrapApplication } from '@angular/platform-browser';

import { InjectionToken } from '@angular/core';

import { AppComponent } from './app/app.component';
import { TaskService } from './app/tasks/tasks.service';

export const TasksServiceToken = new InjectionToken<TaskService>('tasks-service-token');

bootstrapApplication(AppComponent, {
  providers: [{ provide: TasksServiceToken, useClass: TaskService }],
}).catch(err => console.error(err));

// bootstrapApplication(AppComponent).catch((err) => console.error(err));
