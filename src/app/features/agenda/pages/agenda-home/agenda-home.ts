import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../../../shared/components/header/header';

@Component({
  selector: 'app-agenda-home',
  standalone: true,
  imports: [CommonModule, Header],
  templateUrl: './agenda-home.html',
  styleUrls: ['./agenda-home.scss']
})
export class AgendaHome {

  availability = [
    { date: '2026-02-10', status: 'Ocupado' },
    { date: '2026-02-12', status: 'Disponível' },
    { date: '2026-02-15', status: 'Disponível' }
  ];
}

