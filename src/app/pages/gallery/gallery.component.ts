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
    'assets/images/gallery/gallery_(1).jpeg',
    'assets/images/gallery/gallery_(1).jpg',
    'assets/images/gallery/gallery_(2).jpeg',
    'assets/images/gallery/gallery_(2).jpg',
    'assets/images/gallery/gallery_(3).jpeg',
    'assets/images/gallery/gallery_(3).jpg',
    'assets/images/gallery/gallery_(4).jpeg',
    'assets/images/gallery/gallery_(4).jpg',
    'assets/images/gallery/gallery_(5).jpeg',
    'assets/images/gallery/gallery_(6).jpeg',
    'assets/images/gallery/gallery_(7).jpeg',
    'assets/images/gallery/gallery_(8).jpeg',
    
    // Aggiungi altre immagini
  ];
}
