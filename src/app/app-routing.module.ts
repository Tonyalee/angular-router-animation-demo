import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { FirstComponent } from './first.component';
import { SecondComponent } from './second.component';
import { ThirdComponent } from './third.component';

const routes: Routes = [
  {
    path: 'first-component',
    component: FirstComponent,
    data: { animation: 'tab1' },
  },
  {
    path: 'second-component',
    component: SecondComponent,
    data: { animation: 'tab2' },
  },
  {
    path: 'third-component',
    component: ThirdComponent,
    data: { animation: 'tab3' },
  },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
