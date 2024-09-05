import { Component, computed, inject } from "@angular/core";
import { InvesmentService } from "../investiment.service";

@Component({
  selector: "app-investiment-results",
  templateUrl: "./investiment-results.component.html",
  styleUrl: "./investiment-results.component.css",
})
export class InvestimentResultsComponent {
  private investimentService = inject(InvesmentService);

  results = computed(() => this.investimentService.resultData());
  // results = this.investimentService.resultData.asReadonly();
}
