import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss']
})
export class DragAndDropComponent implements OnInit {
  HEROES: { id: number; name: string }[];

  @ViewChildren('dap') levels: QueryList<ElementRef>;
  
  dragEl: any;

  constructor() {}

  ngOnInit() {
    this.HEROES = [
      { id: 1, name: 'Superman' },
      { id: 2, name: 'Batman' },
      { id: 5, name: 'BatGirl' },
      { id: 3, name: 'Robin' },
      { id: 4, name: 'Flash' },
    ];
    console.log("querySelectorAll: ", document.querySelectorAll('.box'));
  }

  ngAfterViewInit() {
    if (this.levels['_results']) {
      console.log(this.levels['_results'])
      var items = this.levels['_results'].map((el) => el.nativeElement);
      console.log(items)
      var dragEl = null;

      function handleDragStart(e) {
        this.style.opacity = '0.4';

        dragEl = this;
        console.log("handleDragStart from c",this);
        console.log(this, this.innerHTML);

        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text', this.innerHTML);
      }

      function handleDragOver(e) {
        if (e.preventDefault) {
          e.preventDefault();
        }

        e.dataTransfer.dropEffect = 'move';

        return false;
      }

      function handleDragEnter(e) {
        this.classList.add('over');
      }

      function handleDragLeave(e) {
        this.classList.remove('over');
      }

      function handleDrop(e) {
        if (e.stopPropagation) {
          e.stopPropagation();
        }

        if (dragEl != this) {
          dragEl.innerHTML = this.innerHTML;
          this.innerHTML = e.dataTransfer.getData('text');
        }

        return false;
      }

      function handleDragEnd(e) {
        this.style.opacity = '1';

        items.forEach(function (item) {
          item.classList.remove('over');
        });
      }

      items.forEach(function (item) {
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragenter', handleDragEnter);
        item.addEventListener('dragover', handleDragOver);
        item.addEventListener('dragleave', handleDragLeave);
        item.addEventListener('drop', handleDrop);
        item.addEventListener('dragend', handleDragEnd);
      });
    }
  }

  handleDragStart(e) {
    console.log('e', e);
    // e.style.opacity = '0.4';

    // this.dragEl = e;
    // console.log(this, e.innerHTML);

    // e.dataTransfer.effectAllowed = 'move';
    // e.dataTransfer.setData('text', e.innerHTML);
  }

  handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }

    e.dataTransfer.dropEffect = 'move';

    return false;
  }

  handleDragEnter(e) {
    e.classList.add('over');
  }

  handleDragLeave(e) {
    e.classList.remove('over');
  }

  handleDrop(e) {
    if (e.stopPropagation) {
      e.stopPropagation();
    }

    if (this.dragEl != e) {
      this.dragEl.innerHTML = e.innerHTML;
      e.innerHTML = e.dataTransfer.getData('text');
    }

    return false;
  }

  handleDragEnd(e) {
    e.style.opacity = '1';
  }
}
