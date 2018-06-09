import { Injectable } from '@angular/core';
import { Pencil } from '../pencil';
import { PENCILS } from '../pencils-mock';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';

@Injectable()
export class PencilService {

  pencil: Pencil[];

  constructor() { }

  public getPencils(): Observable<Pencil> {
    return from(this.pencil);
  }

  public addPencil(pencil: Pencil) {
    this.pencil.push(pencil);
  }

}
