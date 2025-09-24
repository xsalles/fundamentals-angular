import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Post } from '../../components/navbar/navbar';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private readonly httpClient = inject(HttpClient)
  
  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
