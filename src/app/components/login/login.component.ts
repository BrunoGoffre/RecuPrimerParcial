import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: any;
  email: string = "";
  pass: string = "";

  constructor(public fb: FormBuilder, private firebase: FirebaseService, private router: Router) {

  }

  ngOnInit(): void {
    this.usuario = this.fb.group({
      email: ["", [Validators.email, Validators.required]],
      contraseña: ["", Validators.required],
    });
  }

  submit() {
    try {
      this.firebase.Login(this.usuario.value['email'], this.usuario.value['contraseña']).then(ref => {
        this.firebase.usuario = this.usuario.value['email'];
        window.localStorage.clear();
        window.localStorage.setItem('usuario', this.usuario.value['email']);
        this.router.navigateByUrl("");
      });
    } catch (error) {
      console.log(error);
    }
  }

  AutocompletarAdmin() {
    this.email = "bruno@gmail.com";
    this.pass = "123456";
  }
  AutocompletarEmpleado() {
    this.email = "brunoEmpleado@gmail.com";
    this.pass = "123456";
  }

}
