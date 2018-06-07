import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PencilComponent } from './pencil/pencil.component';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { PencilDetailComponent } from './pencil-detail/pencil-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    PencilComponent,
    PencilDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
