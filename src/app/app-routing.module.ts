import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// App Components
import { ViewsComponent } from './views/views.component';

const routes: Routes = [
  { path: '', redirectTo: '/views', pathMatch: 'full' },
  { path: 'views', component: ViewsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
