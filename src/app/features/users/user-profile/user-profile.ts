import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.html',
  styleUrls: ['./user-profile.scss']
})
export class UserProfile {

  user = {
    name: 'Daniel Alves',
    role: 'Garçom',
    email: 'daniel@email.com'
  };
}
