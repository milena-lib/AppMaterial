import { Directive, ElementRef, EventEmitter, HostBinding, Input, OnChanges, Output, Renderer2, SimpleChanges } from '@angular/core';
import { interval } from 'rxjs';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnChanges {
  @Input() public highlight: any;

  constructor(private renderer: Renderer2, private hostElement: ElementRef) { }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.highlight && changes.highlight.previousValue && changes.highlight.currentValue != changes.highlight.previousValue) {
      console.log('value', changes.highlight.currentValue, changes.highlight.previousValue);
      console.log("hostElement", this.hostElement);
      this.renderer.addClass(this.hostElement.nativeElement, 'highlight');
    }
   
    setTimeout(() => {
      this.renderer.removeClass(this.hostElement.nativeElement, 'highlight');
    }, 3000); 
  }
}
