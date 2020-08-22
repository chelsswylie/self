import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { GrandCircusComponent } from './grand-circus/grand-circus.component';
import { ReferencesComponent } from './references/references.component';
import { CMUComponent } from './cmu/cmu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutMeComponent } from './about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    GrandCircusComponent,
    ReferencesComponent,
    CMUComponent,
    NavbarComponent,
    AboutMeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
