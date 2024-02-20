import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div (click)="change()">
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular
    </a>
    </div>
  `,
})
export class AppComponent {
  name = 'Angular';

  private isChanged = false;
  constructor() {
    window.onunload = window.onbeforeunload;
    window.addEventListener('beforeunload', (event) => {
      return false;
    });
    window.addEventListener('unload', (event) => {
      console.log('jjjjjjjj');
alert('test')
     // return false;
    });
  }

  change(): void {
    this.isChanged = true;
    console.log('Changed!');
  }
  test() {
    alert('');
  }
}
