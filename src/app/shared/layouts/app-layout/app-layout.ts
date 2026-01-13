import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, Header],
  templateUrl: './app-layout.html',
  styleUrls: ['./app-layout.scss']
})
export class AppLayout {}

