import { Component, ElementRef, Input, ViewChild, signal } from '@angular/core';

import WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-wave-audio',
  standalone: true,
  imports: [],
  templateUrl: './wave-audio.component.html',
  styleUrl: './wave-audio.component.css',
})
export class WaveAudioComponent {

  @Input({required: true}) audioUrl: string = '';
  @ViewChild('waveform') container!: ElementRef;

  private waveSurfer!: WaveSurfer;

  isPlaying = signal(false);

  ngAfterViewInit() {
    this.waveSurfer = WaveSurfer.create({
      url: this.audioUrl,
      container: this.container.nativeElement,
      waveColor: 'violet',
      progressColor: 'purple',
    });

    this.waveSurfer.on('play', () => this.isPlaying.set(true));
    this.waveSurfer.on('pause', () => this.isPlaying.set(false));
  }

  playButton() {
    this.waveSurfer.playPause();
  }
}
