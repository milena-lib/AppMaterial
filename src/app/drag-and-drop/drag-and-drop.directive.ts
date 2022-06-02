import { Directive, ElementRef, HostListener } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Directive({
  selector: '[appDragAndDrop]'
})
export class DragAndDropDirective {
  dragEl$ = new Subject();
  element: HTMLElement;

  constructor(el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit() {}
  @HostListener('dragstart', ['$event']) handleDragStart(e) {
    //debugger;
    this.element.style.opacity = '0.4';
    // console.log(this.element.innerHTML);
    this.dragEl$.next(this.element);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text', e.innerHTML);
  }

  @HostListener('dragover', ['$event']) handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }

    e.dataTransfer.dropEffect = 'move';

    return false;
  }

  @HostListener('dragenter', ['$event']) handleDragEnter(e) {
    this.element.classList.add('over');
  }

  @HostListener('dragleave', ['$event']) handleDragLeave(e) {
    this.element.classList.remove('over');
  }

  @HostListener('drop', ['$event']) handleDrop(e) {
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    // debugger;
    var data;
    this.dragEl$.subscribe((val) => {
      console.log('val', val);
      data = val;
    });
    console.log('if (' + data, e.dataTransfer.getData('text'));
    this.element.innerHTML = e.dataTransfer.getData('text');
    return false;
  }

  @HostListener('dragend', ['$event']) handleDragEnd(e) {
    this.element.style.opacity = '1';
    this.element.classList.remove('over');
  }
}
