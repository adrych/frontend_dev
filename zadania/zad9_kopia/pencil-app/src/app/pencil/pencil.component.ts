import { Component, OnInit } from '@angular/core';
import { Pencil } from '../pencil';
import { PENCILS } from '../pencils-mock';
import { PencilService } from '../services/pencil.service';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { ObservableInput, Observable } from 'rxjs/Observable';
import { VALID } from '@angular/forms/src/model';


@Component({
  selector: 'app-pencil',
  templateUrl: './pencil.component.html',
  styleUrls: ['./pencil.component.css']
})



export class PencilComponent implements OnInit {
  myForm: FormGroup;
  name: AbstractControl;
  id: AbstractControl;
  pencil: Observable<Pencil>;

  /* pencil: Pencil = {
    id: 1,
    name: 'Magiczny olowek'
  };
  */
  pencils = PENCILS;
  // pencils: Pencil[];

  selectedPencil: Pencil;

  // constructor(private pencilService: PencilService) { }
  constructor(fb: FormBuilder, private pencilService: PencilService) {
    this.myForm = fb.group({
      'name': ['Podaj nazwe', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        this.myNameValidator
      ])],
      'id': ['Podaj id', Validators.compose([
        Validators.min(15)
      ])]
    });

    this.name = this.myForm.controls['name'];
    this.id = this.myForm.controls['id'];
    pencilService.getPencils().subscribe(person => console.log('now olowek'));
    this.myForm.controls['name'].valueChanges.subscribe(name => console.log(name));
    const status = this.name.status;
  }

  ngOnInit() {
  }

  onSelect(pencil: Pencil): void {
    this.selectedPencil = pencil;
  }

  mySubmit(value: any) {
    console.log(this.pencilService.getPencils());
    const pencil = new Pencil(this.name.value, this.id.value);
    this.pencilService.addPencil(pencil);
    // console.log('lixba osob'+ this.personService.getPeople().length)
  }

  myNameValidator(control: FormControl) {
    if (control.value.match(/^Bol/i)) {
      return{
        'bolekValue': true
      };
    }

  /*
  getPencils(): void {
    this.pencils = this.pencilService.getPencils();
  }
  */

}
}
