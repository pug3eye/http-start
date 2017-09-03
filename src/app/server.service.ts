import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ServerService {
 constructor(private http: Http) {}
 storeServers(servers: any[]) {
    return this.http.post('https://pug3eye-0463.firebaseio.com/data.json', servers);
 }
}