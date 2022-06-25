import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { FirebaseService } from 'src/app/services/firebase.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: any;
  email: string = "";
  pass: string = "";
  user: Usuario = { email: '', password: '', rol: '' };
  admin: boolean = false;

  constructor(public fb: FormBuilder, private firebase: FirebaseService, private router: Router, private firestore: FirestoreService) {

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
        this.user.email = this.usuario.value['email'];
        this.user.rol = this.admin ? 'admin' : 'empleado';
        this.firebase.usuario = this.usuario.value['email'];
        window.localStorage.clear();
        window.localStorage.setItem('usuario', JSON.stringify(this.user));
        this.router.navigateByUrl("");
      });
    } catch (error) {
      console.log(error);
    }
  }

  AutocompletarAdmin() {
    this.email = "bruno@gmail.com";
    this.pass = "123456";
    this.admin = true;
  }
  AutocompletarEmpleado() {
    this.email = "brunoEmpleado@gmail.com";
    this.pass = "123456";
    this.admin = false;
  }

}
