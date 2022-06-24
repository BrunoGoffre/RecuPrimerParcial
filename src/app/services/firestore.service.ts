import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firetore: AngularFirestore, private aFAuth: AngularFireAuth, private AFAuthService: FirebaseService, private storage: AngularFireStorage) { }

  getAll(entidad: string) {
    return this.firetore.collection(entidad).valueChanges();
  }

  setObj(entidad: string, obj: any) {
    return this.firetore.collection(entidad).doc(obj.id).set(obj, { merge: true });
  }

  removeObj(entidad: string, obj: any) {
    return this.firetore.collection(entidad).doc(obj.id).delete();
  }

  getWithFilter(entidad: string, campo: string, value: string) {
    return this.firetore.collection(entidad, ref => ref.where(campo, '==', value)).valueChanges();
  }
}
