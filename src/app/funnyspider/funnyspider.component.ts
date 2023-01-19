import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funnyspider',
  templateUrl: './funnyspider.component.html',
  styleUrls: ['./funnyspider.component.css']
})
export class FunnyspiderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var audio = document.getElementById("audio") as HTMLAudioElement;
    audio.play;
  }

}
