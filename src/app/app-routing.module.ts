import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { ThirdComponentComponent } from './third-component/third-component.component';

const routes: Routes = [
  {path: 'first', component: FirstComponentComponent },
  {path: 'second', component: SecondComponentComponent},
  {path: 'third', component: ThirdComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [ FirstComponentComponent, SecondComponentComponent, ThirdComponentComponent ];
