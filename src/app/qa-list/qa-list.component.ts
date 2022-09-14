import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QA } from 'src/app/models/qa.model';

@Component({
  selector: 'app-qa-list',
  templateUrl: './qa-list.component.html',
  styleUrls: ['./qa-list.component.scss']
})
export class QaListComponent implements OnInit {

  @Input() questions: QA[];
  @Output() selectQuestionRequested = new EventEmitter<QA>();
  constructor() { }

  ngOnInit(): void {
  }

  selectQuestion(item: QA) {
    this.selectQuestionRequested.emit(item);
  }

}
