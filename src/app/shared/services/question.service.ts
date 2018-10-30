import { Injectable } from '@angular/core';

import { DynamicControlBase } from '../base';
import { DropdownDynamicControl, TextBoxDynamicControl } from '../controls';

@Injectable()
export class QuestionService {

    // TODO: get from a remote source of question metadata
    // TODO: make asynchronous
    getQuestions() {

        const questions: DynamicControlBase<any>[] = [

            new DropdownDynamicControl({
                key: 'brave',
                label: 'Bravery Rating',
                options: [
                    { key: 'solid', value: 'Solid' },
                    { key: 'great', value: 'Great' },
                    { key: 'good', value: 'Good' },
                    { key: 'unproven', value: 'Unproven' }
                ],
                order: 3
            }),

            new TextBoxDynamicControl({
                key: 'firstName',
                label: 'First name',
                value: 'Bombasto',
                required: true,
                order: 1
            }),

            new TextBoxDynamicControl({
                key: 'emailAddress',
                label: 'Email',
                type: 'email',
                order: 2
            })
        ];

        return questions.sort((a, b) => a.order - b.order);
    }
}
