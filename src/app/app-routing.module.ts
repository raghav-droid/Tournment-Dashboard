import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlayerComponent } from './player/player.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: '', component: PlayerComponent },
  { path: '', component: TeamComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
