import { Component } from "@angular/core";
import { DetailsComponent } from "./details/details.component";

@Component({
  imports: [DetailsComponent],
  standalone: true,
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
})
export class WelcomeComponent {}
