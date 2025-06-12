import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ReleaseService, Track } from '../../services/release.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-next-release',
  templateUrl: './next-release.component.html',
  styleUrls: ['./next-release.component.scss'],
  imports: [CommonModule],
  standalone: true,
})
export class NextReleaseComponent implements AfterViewInit{
  nextReleasesArray: Track[] = [];
  releasedArray: Track[] = [];
  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;
  released: Track[] = [
    {
      id: 'spine',
      title: 'Spine',
      coverUrl: 'assets/images/release/released/Spine/Spine.png',
      audioUrl: 'assets/images/release/released/Spine/Spine.wav',
      releaseDate: undefined,
    },
     {
      id: 'spine',
      title: 'NTFM',
      coverUrl: 'assets/images/release/released/NTFM/NTFM.jpg',
      audioUrl: 'assets/images/release/released/NTFM/NTFM.wav',
      releaseDate: undefined,
    }
  ];

  nextReleases: Track[] = [
    {
      id: 'Diamanti Fini',
      title: 'Diamanti Fini',
      coverUrl:
        'assets/images/release/next_releases/Diamanti Fini/Diamanti Fini.png',
      audioUrl:
        'assets/images/release/next_releases/Diamanti Fini/DIAMANTI FINI(MASTER).mp3',
      releaseDate: new Date('2025-07-19'),
    },
  ];

  isPlaying = false;
  progress = 0;
  currentTime = '';
  duration = '';
  currentTitle: string | null = null;

  playAudio(audioUrl: string, title: string) {
    const audioPlayer = document.querySelector('audio') as HTMLAudioElement;
    if (!audioPlayer) return;

    if (audioPlayer.src !== audioUrl) {
      audioPlayer.src = audioUrl;
    }

    audioPlayer.play();
    this.currentTitle = title;
  }

  togglePlay() {
    const player = this.audioPlayer.nativeElement;
    if (player.paused) {
      player.play();
    } else {
      player.pause();
    }
  }

  updateProgress() {
    const player = this.audioPlayer.nativeElement;
    this.progress = (player.currentTime / player.duration) * 100 || 0;
    this.currentTime = this.formatTime(player.currentTime);
    this.duration = this.formatTime(player.duration);
  }

  formatTime(seconds: number): string {
    if (!seconds || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  seek(event: MouseEvent) {
    const player = this.audioPlayer.nativeElement;
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const width = rect.width;
    const newTime = (clickX / width) * player.duration;
    player.currentTime = newTime;
    this.updateProgress();
  }

  ngAfterViewInit() {
    const player = this.audioPlayer.nativeElement;
    player.addEventListener('timeupdate', () => this.updateProgress());
    player.addEventListener('play', () => (this.isPlaying = true));
    player.addEventListener('pause', () => (this.isPlaying = false));
  }
}

// this.releaseService.getNextRelease()
//   .then(tracks => {
//     this.nextReleasesArray = tracks.map(track => ({
//       ...track,
//       coverUrl: track.coverUrl?.replace(/\\/g, '/'),
//       releaseDate: (track.releaseDate?.toDate?.()) ?? null,
//     }));
//   })
//   .catch(console.error);

// this.releaseService.getReleased()
//   .then(tracks => {
//     this.releasedArray = tracks.map(track => ({
//       ...track,
//       coverUrl: track.coverUrl?.replace(/\\/g, '/'),
//       releaseDate: (track.releaseDate?.toDate?.()) ?? null,
//     }));
//   })
//   .catch(console.error);
