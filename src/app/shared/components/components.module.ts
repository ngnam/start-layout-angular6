import { NgModule, Pipe } from '@angular/core';

import { CommonModule } from '@angular/common';
import { QuestionService } from '../services/question.service';

import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DynamicControlService } from '../services';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, FormsModule],

    declarations: [
        DynamicFormQuestionComponent,
        DynamicFormComponent,
    ],
    exports: [
        DynamicFormQuestionComponent,
        DynamicFormComponent
    ],
    providers: [QuestionService, DynamicControlService],
})
export class ComponentsModule { }
