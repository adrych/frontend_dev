import { Injectable } from '@angular/core';
import { Pencil } from './pencil';
import { PENCILS } from './pencils-mock';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';

@Injectable()
export class PencilService {

  constructor() { }

  getPencils(): Pencil[] {
    return PENCILS;
  }

}
