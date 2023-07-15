import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection, query, where } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FireService {

  constructor(private firestore: Firestore) {

   }

   getdata(){
    const data = collection(this.firestore, '1');
    return collectionData(data);
   }
   getdataByCategory(category: string): Observable<any[]> {
    const categoryQuery = query(collection(this.firestore, '1'), where('category', '==', category));
    console.log('filterd', categoryQuery);
    return collectionData(categoryQuery, { idField: 'id' });
  }
}
