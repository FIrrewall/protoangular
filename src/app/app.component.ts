import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: Observable<any[]>;
  constructor(db: AngularFirestore){
    this.items = db.collection('items').valueChanges();
  }
  title = 'NESTOR';
  show:boolean = true;
  activo:string ="";

  //cursos:string[] = ['CSS','HTML','JS'];

  animales: Array<any> = [
    {tipo:'Perro',nombre:'Lisa',edad:10},
    {tipo:'Gato',nombre:'Pepon',edad:2},
    {tipo:'Pato',nombre:'Tantan',edad:7},
  ]

}
