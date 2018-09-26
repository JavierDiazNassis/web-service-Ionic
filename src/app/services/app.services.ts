import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class appServices {
    url:string='https://api-player.herokuapp.com/api/player' ;
    constructor(private httpClient: HttpClient) { }
    
    getUser():Observable<any>{
        return  this.httpClient.get(this.url);
    }
}