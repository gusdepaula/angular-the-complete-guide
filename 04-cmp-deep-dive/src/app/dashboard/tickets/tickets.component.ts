import { Component } from "@angular/core";
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Ticket } from "./ticket.model";

@Component({
  selector: "app-tickets",
  standalone: true,
  imports: [NewTicketComponent],
  templateUrl: "./tickets.component.html",
  styleUrl: "./tickets.component.css",
})
export class TicketsComponent {
  tickets: Ticket[] = [];
}
