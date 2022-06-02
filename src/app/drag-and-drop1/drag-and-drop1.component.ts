import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-and-drop1',
  templateUrl: './drag-and-drop1.component.html',
  styleUrls: ['./drag-and-drop1.component.scss']
})
export class DragAndDrop1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const items = document.querySelectorAll('.item');
    const columns = document.querySelectorAll('.column');

    items.forEach(item => {
      item.addEventListener('dragstart', dragStart)
      item.addEventListener('dragend', dragEnd)
    });

    let dragItem = null;

    function dragStart() {
      console.log('drag started');
      dragItem = this;
      setTimeout(() => this.className = 'invisible', 0)
    }
    
    function dragEnd() {
        console.log('drag ended');
        this.className = 'item'
        dragItem = null;
    }
    
    function dragDrop() {
        console.log('drag dropped');
        this.append(dragItem);
    }

    function dragOver(e) {
      e.preventDefault();
      console.log('drag over');
    }

    function dragEnter() {
        console.log('drag entered');
    }

    function dragLeave() {
        console.log('drag left');
    }

    columns.forEach(column => {
      column.addEventListener('dragover', dragOver);
      column.addEventListener('dragenter', dragEnter);
      column.addEventListener('dragleave', dragLeave);
      column.addEventListener('drop', dragDrop);
    });
  }

}
