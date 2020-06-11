import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tag-manager';

  ngOnInit(): void {
    localStorage.setItem('country', 'MX');
  }

}
