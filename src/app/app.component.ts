import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

import Jessibuca from "src/assets/jessibuca/jessibuca";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'jess';
  @ViewChild('container') playContainer!: ElementRef<HTMLInputElement>;
  playUrl: string = 'http://flv.bdplay.nodemedia.cn/live/bbb.flv';
  playing: boolean = false;
  jessibuca: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.jessibuca = new Jessibuca({
      container: this.playContainer.nativeElement,
      videoBuffer: 0.2, // 缓存时长
      isResize: false,
      loadingText: '加载中',
      debug: true,
      showBandwidth: true, // 显示网速
      operateBtns: {
        fullscreen: true,
        screenshot: true,
        play: true,
        audio: true,
      },
      forceNoOffscreen: true,
      isNotMute: false,
    });
  }

  play(): void {
    this.jessibuca.play(this.playUrl);
    this.playing = true;
  }

  pause(): void {
    this.jessibuca.pause(this.playUrl);
    this.playing = false;
  }

  destroy(): void {
    this.jessibuca.destroy();
    this.playing = false;
    this.playUrl = '';
  }
}
