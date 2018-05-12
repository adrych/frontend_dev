import { Person } from './../model/person';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  persons: Person[];
  selectedPerson: Person;

  constructor() {
    this.persons = [new Person('Bolek', 1978), new Person('Lolek', 1967), new Person('Tola', 1968), new Person('Srola', 1969)];
  }

  selectPerson(person: Person) {
    this.selectedPerson = person;
  }

  detailsChanged() {
    console.log('Children changed: ');
  }

  ngOnInit() {
  }

}
