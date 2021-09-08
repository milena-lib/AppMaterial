import { Component, OnInit, ViewChild,
  TemplateRef,
  AfterViewInit,
  ViewContainerRef,
  OnDestroy, 
  ElementRef} from '@angular/core';
import {Overlay, OverlayRef} from '@angular/cdk/overlay';
import {TemplatePortal} from '@angular/cdk/portal';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit {
  showBox = false;

  constructor() { }
  
  ngOnInit(): void {
  }

  
  openDialog(e: Event) {
    e.stopPropagation();
    this.showBox = !this.showBox;
  }

  onClickedOutside(e: Event) {
    this.showBox = false;
  }
}
