import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public fb: FormBuilder, private firebase: FirebaseService, private firestore: FirestoreService, private router: Router) { }
  usuario: any;
  email!: string;
  pass!: string;
  ngOnInit(): void {
    this.usuario = this.fb.group({
      email: ["", [Validators.email, Validators.required]],
      contrasenia: ["", Validators.required],
    });
  }

  submit() {
    try {
      this.firebase.RegisterWithEmailAndPass(this.usuario.value['email'], this.usuario.value['contraseña']).then(ref => {
        this.firebase.usuario = this.usuario.value['email'];
        this.firestore.acepta.next(false);
        this.router.navigateByUrl("terminos-y-condiciones");
      });
    } catch (error) {
      console.log(error);
    }
  }
}
