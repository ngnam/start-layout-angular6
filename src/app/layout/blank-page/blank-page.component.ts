import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../shared/services/question.service';

@Component({
    selector: 'app-blank-page',
    templateUrl: './blank-page.component.html',
    styleUrls: ['./blank-page.component.scss']
})
export class BlankPageComponent implements OnInit {
    questions: any[];

    constructor(service: QuestionService) {
        this.questions = service.getQuestions();
    }
    ngOnInit() { }
}
