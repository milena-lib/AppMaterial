import { Component, OnInit } from '@angular/core';
import { QA } from 'src/app/models/qa.model';

@Component({
  selector: 'app-exam-page',
  templateUrl: './exam-page.component.html',
  styleUrls: ['./exam-page.component.scss']
})
export class ExamPageComponent implements OnInit {
  allQuestions: QA[] = [];
  selectedQuestion: QA;
  grade = 0;
  constructor() { }

  ngOnInit(): void {
    this.allQuestions = [
      { id: 1, qustionText: '1 + 1', correctOption: '2', options: ['102', '2', '3', '8'] },
      { id: 2, qustionText: '101 + 1', correctOption: '102', options: ['102', '12', '33', '18'] },
      { id: 3, qustionText: '1 + 26', correctOption: '27', options: ['1092', '27', '34', '18'] },
      { id: 4, qustionText: '1 + 121', correctOption: '122', options: ['122', '1023', '13', '9'] },
      { id: 5, qustionText: '548 + 0', correctOption: '548', options: ['548', '5', '3', '9'] }
    ];
  }

  setCurrentQuestion(item: QA) {
    // this.selectedQuestion = item;
    this.selectedQuestion = this.allQuestions.find(x => x.id === item.id)!;

  }





}
