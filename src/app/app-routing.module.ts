import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { CMUComponent } from './cmu/cmu.component';
import { ResumeComponent } from './resume/resume.component';
import { GrandCircusComponent } from './grand-circus/grand-circus.component';
import { ReferencesComponent } from './references/references.component';
import { WorkHistoryComponent } from './work-history/work-history.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  { path: '', component: ResumeComponent },
  { path: 'CMU', component: CMUComponent },
  { path: 'Grand Circus', component: GrandCircusComponent },
  { path: 'References', component: ReferencesComponent },
  { path: 'Work History', component: WorkHistoryComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [CommonModule, RouterModule],
})
export class AppRoutingModule {}
