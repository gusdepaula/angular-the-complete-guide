import { Component } from "@angular/core";
import { AnalyticsService } from "src/app/shared/analytics.service";
import { SharedModule } from "src/app/shared/shared.module";

@Component({
  standalone: true,
  imports: [SharedModule],
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"],
})
export class DetailsComponent {
  constructor(private analyticsService: AnalyticsService) {}

  onClick() {
    this.analyticsService.registerClick();
  }
}
