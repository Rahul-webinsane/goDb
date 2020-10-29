import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DatasServiceService {

  constructor(private http: HttpClient) { }



  private readonly newProperty = "/assets/jsonDatas/loginDetails.json";


  private readonly newProperty2 = "https://jsonplaceholder.typicode.com/users";

  // tslint:disable-next-line:variable-name
  private log_url: string = this.newProperty;
// tslint:disable-next-line:ban-types
private jsonUrl: String = this.newProperty2;

  getLoginList() {
    return this.http.get(this.log_url);
  }


  // tslint:disable-next-line:member-ordering

  getJsonSampleDatas(): Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }


  addPostDetails(data: any) {
    return this.http.post(this.log_url, data);
   }

}
