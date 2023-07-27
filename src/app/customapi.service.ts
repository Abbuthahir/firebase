import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class CustomapiService {

  constructor(private http: HttpClient) { }

  postCustomApi(data: any) {
    this.http.post('https://customapi-5b1af-default-rtdb.firebaseio.com/posts.json', data)
      .subscribe((data) => console.log(data))
  }
  getdata() {
    this.http.get('https://customapi-5b1af-default-rtdb.firebaseio.com/posts.json')
      .subscribe((data) => console.log('res', data))
  }
}
