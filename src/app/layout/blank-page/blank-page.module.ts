import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankPageRoutingModule } from './blank-page-routing.module';
import { BlankPageComponent } from './blank-page.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../shared/components/components.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        BlankPageRoutingModule,
        ComponentsModule
    ],
    declarations: [
        BlankPageComponent
    ],
    // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BlankPageModule { }
