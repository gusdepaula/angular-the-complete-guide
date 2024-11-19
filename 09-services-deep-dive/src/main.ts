import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { TaskService } from './app/tasks/tasks.service';
import { LoggingService } from './app/logging.service';

// bootstrapApplication(AppComponent, {
//     providers: [TaskService]
// }).catch((err) => console.error(err));

bootstrapApplication(AppComponent,{providers: [LoggingService]}).catch((err) => console.error(err));
