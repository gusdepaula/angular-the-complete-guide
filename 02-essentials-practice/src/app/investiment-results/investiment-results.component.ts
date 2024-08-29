import { Component, Input, input } from "@angular/core";

@Component({
  selector: "app-investiment-results",
  standalone: true,
  imports: [],
  templateUrl: "./investiment-results.component.html",
  styleUrl: "./investiment-results.component.css",
})
export class InvestimentResultsComponent {
  // results = input()
  @Input() results?: {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
  }[];
}
