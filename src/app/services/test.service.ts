import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) {}

  rootURL = 'https://essencialsbackend.blbbrayan.repl.co';

  runTest() {
    return this.http.post(this.rootURL + '/test', {});
  }

}
