import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IQuestionAnswer } from 'src/app/interfaces/i-question-answer';


@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss']
})
export class AnswersComponent implements OnInit {

  _question: IQuestionAnswer;
  get question(): IQuestionAnswer {
    return this._question;
  }
  @Input() set question(value: IQuestionAnswer) {
    if (value) {
      this._question = value;
      this.isDisabled = this._question.userAnswer === '' ? false : true;
    }
  }

  isDisabled: boolean = false;
  
  selectedOption: string;
  @Output() selectedAnswer = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onChangeOption(opt) {
    this.selectedOption = opt;
    this.selectedAnswer.emit(opt);
    this.isDisabled = true;
  }

}
