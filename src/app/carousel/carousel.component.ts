import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  position: number = 0;
  width: number = 271;
  count: number = 3;
  selectedImage: string = '../../assets/images/1.jpg';

  listElems = [
    {src: '../../assets/images/1.jpg'},
    {src: '../../assets/images/2.jpg'},
    {src: '../../assets/images/3.jpg'},
    {src: '../../assets/images/4.jpg'},
    {src: '../../assets/images/5.jpg'},
    {src: '../../assets/images/6.jpg'},
    {src: '../../assets/images/7.jpg'},
    {src: '../../assets/images/8.jpg'},
    {src: '../../assets/images/9.jpg'},
    {src: '../../assets/images/10.jpg'}
  ]

  @ViewChild('container') containerCtrl: ElementRef;

  constructor() { }

  ngOnInit(): void {
    /* этот код помечает картинки, для удобства разработки */
    // var lis = document.getElementsByTagName('li');
    // for (var i = 0; i < lis.length; i++) {
    //   lis[i].style.position = 'relative';
    //   var span = document.createElement('span');
    //   // обычно лучше использовать CSS-классы,
    //   // но этот код - для удобства разработки, так что не будем трогать стили
    //   span.style.cssText = 'position:absolute;left:0;top:0';
    //   span.innerHTML = i + 1;
    //   lis[i].appendChild(span);
    // }

    /* конфигурация */
    // var width = 130; // ширина изображения
    // var count = 3; // количество изображений

    // var carousel = document.getElementById('carousel');
    // var list = carousel.querySelector('ul');
    // var listElems = carousel.querySelectorAll('li');

    // var position = 0; // текущий сдвиг влево

    // carousel.querySelector('.prev').onclick = function() {
    //   // сдвиг влево
    //   // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
    //   position = Math.min(position + width * count, 0)
    //   list.style.marginLeft = position + 'px';
    // };

    // carousel.querySelector('.next').onclick = function() {
    //   // сдвиг вправо
    //   // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
    //   position = Math.max(position - width * count, -width * (listElems.length - count));
    //   list.style.marginLeft = position + 'px';
    // };
  }

  goPrev() {
    this.position = Math.min(this.position + this.width * this.count, 0);
    this.containerCtrl.nativeElement.style.marginLeft = this.position + 'px';
  }

  goNext() {
    this.position = Math.max(this.position - this.width * this.count, -this.width * (this.listElems.length - this.count));
    this.containerCtrl.nativeElement.style.marginLeft = this.position + 'px';
  }

}
