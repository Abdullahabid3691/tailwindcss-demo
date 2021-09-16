import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Hero} from "../../interfaces/hero";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() heroItems?: Hero[];
  @Output() heroRemoved = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  removeHero(id: number): void {
    this.heroRemoved.next(id);
  }

}
