import { Component, OnInit, Input } from '@angular/core';
import { Pencil } from '../pencil';

@Component({
  selector: 'app-pencil-detail',
  templateUrl: './pencil-detail.component.html',
  styleUrls: ['./pencil-detail.component.css']
})

export class PencilDetailComponent implements OnInit {

  @Input() pencil: Pencil;

  constructor() { }

  ngOnInit() {
  }

}
