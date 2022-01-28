import { Component, Input, OnInit, ViewChild, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.scss']
})
export class SignatureComponent implements OnInit {
  @Input() name: string;
  @ViewChild('sigPad') sigPad: ElementRef<HTMLCanvasElement>;
  sigPadElement;
  context;
  isDrawing = false;
  img;
  
  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    // debugger;
    this.sigPadElement = this.sigPad?.nativeElement;
    this.context = this.sigPadElement?.getContext('2d');
    this.context.strokeStyle = '#3742fa';
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(e) {
    this.isDrawing = false;
  }

  onMouseDown(e) {
    this.isDrawing = true;
    const coords = this.relativeCoords(e);
    this.context.moveTo(coords.x, coords.y);
  }

  onMouseMove(e) {
    if (this.isDrawing) {
      const coords = this.relativeCoords(e);
      this.context.lineTo(coords.x, coords.y);
      this.context.stroke();
    }
  }

  private relativeCoords(event) {
    const bounds = event.target.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    return { x: x, y: y };
  }

  clear() {
    this.context.clearRect(0, 0, this.sigPadElement.width, this.sigPadElement.height);
    this.context.beginPath();
  }

  save() {
    this.img = this.sigPadElement.toDataURL("image/png");
    console.log(this.img);
  }
}
