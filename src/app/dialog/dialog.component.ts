import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent  implements OnInit{
  freshnesslist = ['Brand New', 'Second Hand', 'Refurbished'];
  productForm !: FormGroup;

  constructor(private formBuilder: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productName: ['', Validators.required],
      freshness: ['', Validators.required],
      price: ['', Validators.required],
      comment: ['', Validators.required],
      date: ['', Validators.required]
    })
  }

  addProduct() {
    console.log(this.productForm.value);
    if(this.productForm.valid){
      this.api.postProduct(this.productForm.value).subscribe({
        next:(res)=>{
          alert("Poduct added successfully")
        },
        error:()=>{
          alert("Error to add this product")
        }
      });
    }
  }
}
