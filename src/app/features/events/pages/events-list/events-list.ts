import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events-list.html',
  styleUrls: ['./events-list.scss']
})
export class EventsList {

  events = [
    {
      id: 1,
      name: 'Casamento Silva',
      date: '2026-02-10',
      location: 'São Paulo'
    },
    {
      id: 2,
      name: 'Evento Corporativo Tech',
      date: '2026-03-05',
      location: 'Campinas'
    }
  ];
}
