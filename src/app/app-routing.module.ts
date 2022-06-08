import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { FirstComponent } from './first.component';
import { SecondComponent } from './second.component';

const routes: Routes = [
  {
    path: 'first-component',
    component: FirstComponent,
    data: { animation: 'firstPage' },
  },
  {
    path: 'second-component',
    component: SecondComponent,
    data: { animation: 'secondPage' },
  },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
