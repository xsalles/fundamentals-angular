import { ChangeDetectorRef, Component, inject, Inject, OnInit, signal } from '@angular/core';
import { Storage } from '../../services/storage';
import { RequestService } from '../../services/request/request.service';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class Navbar implements OnInit {
  private storageService = inject(Storage);
  private api = inject(RequestService);

  public postsList = signal<Post[]>([]);

  currentUser() {
    return this.storageService.currentUser;
  }

  ngOnInit() {
    this.api.getPosts().subscribe(data => {
      this.postsList.set(data);
    });
  }
}
