import { Routes } from '@angular/router';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { NextReleaseComponent } from './pages/next-release/next-release.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // redirect dalla root a /home
  { path: 'home', component: HomeComponent },
  { path: 'next-release', component: NextReleaseComponent },
  { path: 'gallery', component: GalleryComponent },
];
