import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path:'registro',
        loadChildren: () =>
        import('../registro/registro.module').then(m => m.RegistroPageModule)
      },
      {
        path:'datos',
        loadChildren: () =>
        import('../tabla/tabla.module').then(m => m.TablaPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
