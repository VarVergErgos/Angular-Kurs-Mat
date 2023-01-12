import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Kurs-Mat';

  constructor (private dialog: MatDialog){

  }

  openDialog() {
    this.dialog.open(DialogComponent, {
    width:'30%'
    });

  }
}
