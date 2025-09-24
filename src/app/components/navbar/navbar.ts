import { Component, Inject } from '@angular/core';
import { Storage } from '../../services/storage';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class Navbar {
  constructor(private storageService: Storage) {}

  currentUser() {
    return this.storageService.currentUser;
  }
}
