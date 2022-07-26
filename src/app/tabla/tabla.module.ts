import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TablaPageRoutingModule } from './tabla-routing.module';

import { TablaPage } from './tabla.page';
import { RouterModule } from '@angular/router';
import { NgxDatatableModule} from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TablaPageRoutingModule,
    RouterModule.forChild([{path:'', component: TablaPage}]),
    NgxDatatableModule
  ],
  declarations: [TablaPage]
})
export class TablaPageModule {}
