import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { UserInputComponent } from "./user-input.component";

@NgModule({
  declarations: [UserInputComponent],
  imports: [FormsModule],
  exports: [UserInputComponent],
})
export class UserInputModule {}
