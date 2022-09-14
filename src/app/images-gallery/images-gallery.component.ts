import { Component, OnInit } from '@angular/core';
import { ImageDetails } from 'src/app/models/image-details.model';

@Component({
  selector: 'app-images-gallery',
  templateUrl: './images-gallery.component.html',
  styleUrls: ['./images-gallery.component.scss']
})
export class ImagesGalleryComponent implements OnInit {

  images: ImageDetails[] = [];
  selectedImage: ImageDetails;
  constructor() {
  }

  ngOnInit(): void {
    for (let index = 1; index <= 4; index++) {
      this.images.push({ id: index, title: 'Title of ' + index, url: `/assets/images/${index}.jpg` });
    }
  }

  setSelecetdImage(img: ImageDetails) {
    this.selectedImage = img;
  }

}
