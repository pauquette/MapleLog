import { Component } from '@angular/core';
import { Entry } from './Entry';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MapleLog';
  headers = [
    'Name',
    'Gallons',
    'Sugar Content (%)',
    'Location',
    'Timestamp'
  ]
  entries: Entry[] = [
    {
      gallons: 750,
      sugar_content: 1.2,
      location: 'Hawk Rd',
      name: 'Mike Pauquette',
      timestamp: '3/28/2022 4:23PM'
    },
    {
      gallons: 500,
      sugar_content: 1.46,
      location: 'Hebron',
      name: 'Hollis Pauquette',
      timestamp: '3/28/2022 2:23PM'
    }
  ]
}
