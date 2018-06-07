import { Component, OnInit } from '@angular/core';
import { Pencil } from '../pencil';
import { PENCILS } from '../pencils-mock';
// import { PencilService } from '../pencil.service';


@Component({
  selector: 'app-pencil',
  templateUrl: './pencil.component.html',
  styleUrls: ['./pencil.component.css']
})



export class PencilComponent implements OnInit {

  /* pencil: Pencil = {
    id: 1,
    name: 'Magiczny olowek'
  };
  */
  pencils = PENCILS;
  // pencils: Pencil[];

  selectedPencil: Pencil;

  // constructor(private pencilService: PencilService) { }
  constructor() { }

  ngOnInit() {
    // this.getPencils();
  }

  onSelect(pencil: Pencil): void {
    this.selectedPencil = pencil;
  }

  /*
  getPencils(): void {
    this.pencils = this.pencilService.getPencils();
  }
  */

}
