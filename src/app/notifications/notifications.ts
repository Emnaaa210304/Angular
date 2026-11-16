import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  imports: [],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications {
  nombreNotifications: number = 2;
  afficher: boolean = false;

  afficherNotifications() {
    this.afficher = !this.afficher;
  }

}
