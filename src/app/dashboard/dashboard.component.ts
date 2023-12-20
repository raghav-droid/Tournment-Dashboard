import { Component, OnInit } from '@angular/core';
import { TournamentService } from '../tournament.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tournamentData: any;

  constructor(private tournamentService: TournamentService) { }

  ngOnInit(): void {
    this.fetchTournamentData();
  }

  fetchTournamentData(): void {
    this.tournamentService.getTournamentData().subscribe(data => {
      this.tournamentData = data;
    });
  }
}
