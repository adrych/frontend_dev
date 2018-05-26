import { Person} from './../model/person.model';
import { Injectable } from '@angular/core';

@Injectable()
export class PersonService {

  persons: Person[];

  constructor() {
    this.persons = [ new Person('Bolek', 1998)];
   }

  getPersons() {
    return this.persons;
  }

  addPerson(person: Person) {
    this.persons.push(person);
  }

}
