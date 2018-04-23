import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RocketsComponent } from './rockets/rockets.component';
import { LaunchesComponent } from './launches/launches.component';

const routes: Routes = [
  { path: 'rockets', component: RocketsComponent },
  { path: 'launches', component: LaunchesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
