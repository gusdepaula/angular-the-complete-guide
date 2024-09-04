import { CurrencyPipe } from "@angular/common";
import { Component, input } from "@angular/core";

@Component({
  selector: "app-investiment-results",
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: "./investiment-results.component.html",
  styleUrl: "./investiment-results.component.css",
})
export class InvestimentResultsComponent {
  results = input<
    {
      year: number;
      interest: number;
      valueEndOfYear: number;
      annualInvestment: number;
      totalInterest: number;
      totalAmountInvested: number;
    }[]
  >();
}
