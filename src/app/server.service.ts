import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ServerService {
 constructor(private http: Http) {}
 storeServers(servers: any[]) {
   const headers = new Headers({'Content-Type': 'application/json'});
//    return this.http.post('https://pug3eye-0463.firebaseio.com/data.json', servers, {headers: headers});
   return this.http.put('https://pug3eye-0463.firebaseio.com/data.json', servers,
   {headers: headers});
 }
 getServers() {
   return this.http.get('https://pug3eye-0463.firebaseio.com/data.json')
    .map(
        (response: Response) => {
            const data = response.json();
            return data;
        }
    );
 }
}