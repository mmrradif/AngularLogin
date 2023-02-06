import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



// Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';






const modules = [
  CommonModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  ReactiveFormsModule,
  MatSnackBarModule,
  MatProgressSpinnerModule
]


@NgModule({

  declarations: [],


  imports: [
    modules
  ],

  exports: [
    modules
    ]

})
export class LoginModule { }
