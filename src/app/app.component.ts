import { Component, OnInit } from '@angular/core';
import { FireService } from './fire.service';
import { Observable, tap } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'firebase';
  prods! : Observable<any[]>;

  constructor(private fire: FireService){

  }
  ngOnInit() {
    // this.prods = this.fire.getdata();
    // this.prods.pipe(tap(data => {console.log(data)})
    // ).subscribe()
  }
}
