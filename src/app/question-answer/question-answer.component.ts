import { Component, OnInit } from '@angular/core';
import { IQuestionAnswer } from '../interfaces/i-question-answer';

@Component({
  selector: 'app-question-answer',
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.scss']
})
export class QuestionAnswerComponent implements OnInit {

  questions: IQuestionAnswer[]=[
    {id: 1, text: 'שאלה 1', options: [
                                        {id: 1, text: 'option 1'},
                                        {id:2, text:'option 2'},
                                        {id: 3, text: 'option 3'},
                                        {id:4, text:'option 4'}
                                      ], 
                                      correctAnswer: 'option 2',
                                      userAnswer: '',
                                      timer: 10000
    },
    {id: 2, text: 'שאלה 2', options: [
                                        {id: 1, text: 'option 1'},
                                        {id:2, text:'option 2'},
                                        {id:3, text:'option 3'}                                        
                                      ], 
                                      correctAnswer: 'option 3',
                                      userAnswer: '',
                                      timer: 40000
    },
    {id: 3, text: 'שאלה 3', options: [
                                        {id: 1, text: 'option 1'},
                                        {id:2, text:'option 2'},
                                        {id: 3, text: 'option 3'},
                                        {id:4, text:'option 4'},
                                        {id: 5, text: 'option 5'}
                                      ], 
                                      correctAnswer: 'option 1',
                                      userAnswer: '',
                                      timer: 20000
    },
    {id: 4, text: 'שאלה 4', options: [
                                        {id: 1, text: 'option 1'},
                                        {id:2, text:'option 2'},
                                        {id: 3, text: 'option 3'},
                                        {id:4, text:'option 4'},
                                        {id: 5, text: 'option 5'},
                                        {id:6, text:'option 6'}
                                      ], 
                                      correctAnswer: 'option 6',
                                      userAnswer: '',
                                      timer: 60000
    },
    {id: 5, text: 'שאלה 5', options: [
                                        {id: 1, text: 'option 1'},
                                        {id:2, text:'option 2'},
                                        {id: 3, text: 'option 3'},
                                        {id:4, text:'option 4'},
                                        {id: 5, text: 'option 5'}
                                      ], 
                                      correctAnswer: 'option 5',
                                      userAnswer: '',
                                      timer: 30000
    }
  ];

  grade: number = 0;
  selectedQuestion: IQuestionAnswer;
  questIndex: number = 0;
  
  constructor() { }

  ngOnInit(): void {
    
  }
  
  setQuestion(quest: IQuestionAnswer, idx: number) {
    this.selectedQuestion = quest;
    this.questIndex = idx;

    // this.setNextQuestion();
  }

  saveAnswer($event) {
    const q = this.questions.find(item => item.id === this.selectedQuestion.id);
    q.userAnswer = q.options.find(item => item.text === $event)?.text;

    this.showGrade();

    this.setNextQuestion();
  }

  setNextQuestion() {
    const notAnsweredQuestions = this.questions.filter(item => item.userAnswer === '');

    if(notAnsweredQuestions?.length === 0) {
      return;
    }

    let idx: number = this.questIndex;
    if(this.questIndex === this.questions.length-1) {
      this.questIndex = -1;
    }       

    setTimeout(() => {
      this.setQuestion(this.questions[this.questIndex+1], this.questIndex+1)
    }, 5000);
  }

  showGrade() {
    const answCompare = this.questions.filter(item => item.correctAnswer === item.userAnswer);

    if(!answCompare) {
      return;
    }

    this.grade = answCompare?.length * 20;    
  }

}
