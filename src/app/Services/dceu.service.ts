import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //add for http
import { Observable  } from 'rxjs'; //add observable

@Injectable({
  providedIn: 'root'
})
export class DceuService {

  constructor(private httpClient:HttpClient) { }

  GetJokerData():Observable<any>
  {
    return this.httpClient.get('https://www.omdbapi.com/?t=joker&y=2019&plot=full&apikey=365cf67c');
  }
}
