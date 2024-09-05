import { Component, signal } from "@angular/core";
import { InvesmentService } from "../investiment.service";

@Component({
  selector: "app-user-input",
  templateUrl: "./user-input.component.html",
  styleUrl: "./user-input.component.css",
})
export class UserInputComponent {
  enteredInitialInvestment = signal("0");
  enteredAnnualInvestment = signal("0");
  enteredExpectedReturn = signal("5");
  enteredDuration = signal("10");

  constructor(private investimentService: InvesmentService) {}

  onSubmit() {
    this.investimentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedReturn(),
      annualInvestment: +this.enteredAnnualInvestment(),
    });
    this.enteredInitialInvestment.set("0");
    this.enteredAnnualInvestment.set("0");
    this.enteredExpectedReturn.set("5");
    this.enteredDuration.set("10");
  }
}
