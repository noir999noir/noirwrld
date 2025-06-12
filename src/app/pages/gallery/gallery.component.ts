import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  images: string[] = [
    'assets/images/gallery/gallery_1 (1).jpg',
    'assets/images/gallery/gallery_1 (2).jpg',
    'assets/images/gallery/gallery_1 (3).jpg',
    'assets/images/gallery/gallery_1 (4).jpg',
    // Aggiungi altre immagini
  ];
}
