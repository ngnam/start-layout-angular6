import { DynamicControlBase, ControlType } from '../base';

export class DropdownDynamicControl extends DynamicControlBase<string> {
  controlType = ControlType.dropDown;
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
