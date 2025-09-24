import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  titleHeader = 'Pedro Sales';

  subTitle = 'Pedro Sales';

  count = 0;

  increment() {
    this.count++;
  }

  handleClick() {
    this.increment();
    this.subTitle = 'Title updated' + this.count;
  }
}
