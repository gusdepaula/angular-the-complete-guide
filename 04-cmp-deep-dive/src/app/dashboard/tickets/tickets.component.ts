import { Component } from "@angular/core";
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Ticket } from "./ticket.model";
import { TicketComponent } from "./ticket/ticket.component";
import { tick } from "@angular/core/testing";

@Component({
  selector: "app-tickets",
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: "./tickets.component.html",
  styleUrl: "./tickets.component.css",
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  onAdd(ticketData: { title: string; text: string }) {
    const ticket: Ticket = {
      title: ticketData.title,
      request: ticketData.text,
      id: Math.random().toString(),
      status: "open",
    };

    this.tickets.push(ticket);
  }

  onCloseTicket(id: string) {
    this.tickets = this.tickets.map((ticket) => {
      if (ticket.id === id) {
        return { ...ticket, status: "close" };
      }
      return ticket;
    });
  }
}
