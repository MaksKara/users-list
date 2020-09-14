import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Список пользователей';
  typesOfShoes: string[] = ['Johny','Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
}
