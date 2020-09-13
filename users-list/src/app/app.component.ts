import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'users-list';
  typesOfShoes: string[] = ['Johny','Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
}
