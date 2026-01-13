import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../../../../shared/components/header/header';

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports: [CommonModule, Header],
  templateUrl: './dashboard-home.html',
  styleUrls: ['./dashboard-home.scss']
})
export class DashboardHome {}
