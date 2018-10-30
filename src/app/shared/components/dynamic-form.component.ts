import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicControlService } from '../services';
import { DynamicControlBase } from '../base';


@Component({
    selector: 'app-dynamic-form',
    templateUrl: './dynamic-form.component.html',
})
export class DynamicFormComponent implements OnInit {

    @Input() controls: DynamicControlBase<any>[] = [];
    form: FormGroup;
    payLoad = '';

    constructor(private dcs: DynamicControlService) { }

    ngOnInit() {
        this.form = this.dcs.toFormGroup(this.controls);
    }

    onSubmit() {
        this.payLoad = JSON.stringify(this.form.value);
    }
}
