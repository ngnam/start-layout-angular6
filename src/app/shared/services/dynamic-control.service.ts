import { Injectable } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { DynamicControlBase } from '../base';


@Injectable()
export class DynamicControlService {

    constructor() {

    }

    toFormGroup(formControls: DynamicControlBase<any>[]) {
        const group: any = {};

        formControls.forEach(question => {
            group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                : new FormControl(question.value || '');
        });
        return new FormGroup(group);

    }
}
