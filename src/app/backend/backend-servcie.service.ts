import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BackendServcieService {

  private apiBase: string; private api: any;

  constructor(private http: HttpClient) {
    this.apiBase = "https://vast-shore-74260.herokuapp.com/banks";
    this.api = {
      STATEBANKLIST: this.apiBase + "?city="
    }
  }

  // Common Method to call API
  execute(request: string, url: string, data: any) {
    // JSON API
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': "application/json",
        'Access-Control-Allow-Origin': '*',
      }),
      withCredentials: false
    };
    // this.http.post() or this.http.get()
    if (request == "get") {
      return this.http.get<any>(url, httpOptions);
    } else {
      return this.http.post<any>(url, data, httpOptions);
    }
  }
  // Common Method for Posting Data
  post(url: string, data: any) {
    return this.execute("post", url, data);
  }

  // Common Method for Posting Data
  get(url: string) {
    return this.execute("get", url, null);
  }

  // fetching all the bank details
  getBankLists(stateName){
    let url = this.api.STATEBANKLIST + stateName
    return this.get(url)
  }
}
