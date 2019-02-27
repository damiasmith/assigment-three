import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'This week is crazy!';
  showDetails = false;
  details = [];

  onToggle() {
   this.showDetails = !this.showDetails;
   this.details.push(this.details.length + 1);
   }
}
