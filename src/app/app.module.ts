import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { GrandCircusComponent } from './grand-circus/grand-circus.component';
import { ReferencesComponent } from './references/references.component';
import { CMUComponent } from './cmu/cmu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HttpClientModule,
    AppComponent,
    ResumeComponent,
    GrandCircusComponent,
    ReferencesComponent,
    CMUComponent,
    NavbarComponent,
    AboutMeComponent,
    ProjectsComponent,
    HomeComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
