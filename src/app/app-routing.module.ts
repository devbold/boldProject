import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// App Components
import { RecipiesComponent } from './views/recipies/recipies.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipiesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
