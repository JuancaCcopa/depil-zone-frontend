import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    SharedModule
  ],
  declarations: [UsuarioComponent]
})
export class UsuarioModule { }
