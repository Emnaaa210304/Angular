import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './footer/footer';
import { Navbar } from './navbar/navbar';
import { Header } from './header/header';
import { Notifications } from './notifications/notifications';
import { FriendsList } from './friends-list/friends-list';
import { UserProfile } from './user-profile/user-profile';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Notifications,FriendsList,UserProfile,Footer,Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('test21');
}
