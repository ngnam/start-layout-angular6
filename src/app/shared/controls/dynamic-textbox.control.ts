import { DynamicControlBase, ControlType } from '../base';

export class TextBoxDynamicControl extends DynamicControlBase<string> {
    controlType = ControlType.textBox;
    type: string;

    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || '';
    }

}
