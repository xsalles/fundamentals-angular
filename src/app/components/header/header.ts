import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  titleHeader = 'Pedro Sales';

  subTitle = 'Pedro Sales';

  count = 0;

  applyColor: boolean = false;

  increment() {
    this.count++;
  }

  handleClick() {
    this.applyColor = !this.applyColor;

    this.increment();
    this.subTitle = 'Title updated' + this.count;
  }

  valueInput = 'initial value';

  showValueInput() {
    console.log(this.valueInput);
  }

  bgColor = 'blue';
}
