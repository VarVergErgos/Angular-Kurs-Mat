import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent {
  freshnesslist = ['Brand New', 'Second Hand', 'Refurbished'];
  productForm !:FormGroup

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productName: ['', Validators.required],
      freshness: ['', Validators.required],
      price: ['', Validators.required ],
      comment: ['', Validators.required],
      date: ['', Validators.required],
    });


  }
}
