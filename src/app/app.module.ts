import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpaceComponent } from './space/space.component';
import {RouterModule, Routes} from '@angular/router';
import { TimerComponent } from './timer/timer.component';
import {DialogComponent, SnackBarComponent} from './dialog/dialog.component';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ProximaGladiusComponent } from './proxima-gladius/proxima-gladius.component';
import { PinaLounComponent } from './pina-loun/pina-loun.component';
import { GrosusMagmaComponent } from './grosus-magma/grosus-magma.component';
import {FormsModule} from '@angular/forms';
import { EndComponent } from './end/end.component';



const appRoutes: Routes = [
    { path: 'space', component: SpaceComponent },
    { path: 'hero/:id',      component: SpaceComponent },
    { path: '',   redirectTo: 'space', pathMatch: 'full' },
    { path: 'proximaGladius', component: ProximaGladiusComponent },
    { path: 'pinaLoun', component: PinaLounComponent },
    { path: 'grosusMagma', component: GrosusMagmaComponent },
    { path: 'end', component: EndComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SpaceComponent,
    TimerComponent,
    DialogComponent,
      SnackBarComponent,
      ProximaGladiusComponent,
      PinaLounComponent,
      GrosusMagmaComponent,
      EndComponent
  ],
  imports: [
      BrowserModule,
      RouterModule.forRoot(
          appRoutes
      ),
      MatSnackBarModule,
      BrowserAnimationsModule,
      MatTooltipModule,
      MatRadioModule,
      MatCheckboxModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
    entryComponents: [SnackBarComponent],
})
export class AppModule { }
