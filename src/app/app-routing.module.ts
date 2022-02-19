import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExperienceComponent } from './core/experience/experience.component';
import { ProjectsComponent } from './core/projects/projects.component';

const routes: Routes = [
  { path: "projects",   component: ProjectsComponent   },
  { path: "experience", component: ExperienceComponent },

  { path: '',   redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
