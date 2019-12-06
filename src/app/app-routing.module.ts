import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SpaceComponent} from './space/space.component';
import {ProximaGladiusComponent} from './proxima-gladius/proxima-gladius.component';

const routes: Routes = [{ path: 'space', component: SpaceComponent },
    { path: 'hero/:id',      component: SpaceComponent },
    { path: '**', component: SpaceComponent },
    { path: '',   redirectTo: 'space', pathMatch: 'full' },
    { path: 'proximaGladius', component: ProximaGladiusComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
