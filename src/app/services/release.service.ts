import { Injectable } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';

export interface Track {
  id?: string;
  title: string;
  coverUrl: string;
  audioUrl: string;
  releaseDate: any;
}

@Injectable({
  providedIn: 'root'
})
export class ReleaseService {
  // constructor(private firestore: Firestore) {}

  // async getNextRelease(): Promise<Track[]> {
  //   const colRef = collection(this.firestore, 'next_releases');
  //   const snapshot = await getDocs(colRef);

  //   const tracks: Track[] = [];
  //   snapshot.forEach(docSnap => {
  //     tracks.push({ id: docSnap.id, ...docSnap.data() } as Track);
  //   });

  //   return tracks;
  // }

  // async getReleased(): Promise<Track[]> {
  //   const colRef = collection(this.firestore, 'released');
  //   const snapshot = await getDocs(colRef);

  //   const tracks: Track[] = [];
  //   snapshot.forEach(docSnap => {
  //     tracks.push({ id: docSnap.id, ...docSnap.data() } as Track);
  //   });

  //   return tracks;
  // }
}
