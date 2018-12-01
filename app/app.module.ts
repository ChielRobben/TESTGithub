import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MatButtonModule,MatMenuModule,MatCardModule,MatToolbarModule,MatGridListModule,MatListModule, MatCheckboxModule} from '@angular/material';
import { HomeComponent } from './home/home.component';
import { PosseComponent } from './posse/posse.component';
import { RulesComponent } from './rules/rules.component';
import { ProspectsComponent } from './prospects/prospects.component';
import { EventsComponent } from './events/events.component';
import { MembersComponent } from './members/members.component';
import { ContactComponent } from './contact/contact.component';
import {RouterModule,Routes} from '@angular/router';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Posse', component: PosseComponent },
  { path: 'Rules', component: RulesComponent },
  { path: 'Members', component: MembersComponent },
  { path: 'Events', component: EventsComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Prospects', component: ProspectsComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PosseComponent,
    RulesComponent,
    ProspectsComponent,
    EventsComponent,
    MembersComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatMenuModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
