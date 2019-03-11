import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobsComponent } from './components/jobs/jobs.component';
import { RecieverComponent } from './components/reciever/reciever.component';

const routes: Routes = [
  { path: 'driver', component: JobsComponent },
  { path: 'reciever', component: RecieverComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
