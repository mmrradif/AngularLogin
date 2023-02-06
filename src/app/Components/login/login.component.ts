import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {

    this.form = this.fb.group({

      username: ['', Validators.required],
      password: ['', Validators.required]

    });
  }

    ngOnInit(): void {
       
    }

  login() {
   /* console.log(this.form);*/

    const username = this.form.value.username; 
    const password = this.form.value.password;


    //console.log(username);
    //console.log(password);

    if (username == "radif" && password == "radif123") {
      this.fakeLoading();
    }
    else {
      this.error();
      this.form.reset();
    }
  }


  error() {

    this._snackBar.open("Invalid Username or Password", "Close", {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    })
  }


  fakeLoading() {

    this.loading = true;
    setTimeout(() => {

      this.router.navigate(['dashboard'])
      /*this.loading = false;*/

    },5000);
    
  }

}
