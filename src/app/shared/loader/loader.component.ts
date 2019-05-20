import { Component, OnInit, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  @Input() title: string;
  @Input() isVisible: boolean;
  @Input() progress: number;

  constructor() { }

  ngOnInit() {
  }
}

