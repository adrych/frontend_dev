import { Component, OnInit } from '@angular/core';
import {PersonService} from '../services/person.service';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  myForm: FormGroup;
  imie: AbstractControl;

  constructor(fb: FormBuilder, private personService: PersonService) {
    this.myForm = fb.group({
      'imie': ['Podaj imie', Validators.compose([
        Validators.required, Validators.minLength(3), this.myImieValidator
      ])]
    });

  this.imie = this.myForm.controls['imie'];
  this.myForm.controls['imie'].valueChanges.subscribe(imie => console.log(imie));
  }

  ngOnInit() {
  }

  mySubmit(value: any) {
      console.log(this.personService.getPersons().pop());
    }

myImieValidator(control: FormControl) {
  if (control.value.match(/^Bol/i)) {
    return {
      'bolekValue': true
      };
    }
  }

}
