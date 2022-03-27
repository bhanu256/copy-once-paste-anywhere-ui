import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-copied-list',
  templateUrl: './copied-list.component.html',
  styleUrls: ['./copied-list.component.css']
})
export class CopiedListComponent implements OnInit {

  items: Item[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items.push({text: "copied"});
    this.items.push({text: "tttt"});
    this.items.push({text: "hjhjhj"});
  }

}
