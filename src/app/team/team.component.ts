import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
  @Input() team: any;

  constructor() { }

  savePlayer(player: any): void {
    // Logic to save/update player
    console.log('Player saved:', player);
  }

  addNewPlayer(newName: string, newAge: string): void {
    const parsedAge = parseInt(newAge, 10);
    if (!isNaN(parsedAge)) {
      const newPlayer = {
        name: newName,
        age: parsedAge
      };
      this.team.players.push(newPlayer);
      console.log('New player added:', newPlayer);
    } else {
      console.error('Invalid age entered!');
    }
  }
}
