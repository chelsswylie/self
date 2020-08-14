import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { GrandCircusComponent } from './grand-circus/grand-circus.component';
import { ReferencesComponent } from './references/references.component';
import { WorkHistoryComponent } from './work-history/work-history.component';
import { CMUComponent } from './cmu/cmu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    GrandCircusComponent,
    ReferencesComponent,
    WorkHistoryComponent,
    CMUComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
