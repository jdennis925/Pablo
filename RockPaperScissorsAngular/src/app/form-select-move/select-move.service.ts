import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {Move} from './move';
import { PlayResult } from "app/form-select-move/playResult";

@Injectable()
export class SelectMoveService {
    constructor(private http: Http){}

    private selectMoveURL = 'http://localhost:43777/api/values/';

    public get(id: number): Observable<PlayResult> {
        return this.http.get(`${this.selectMoveURL}/${id}`)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    public create(move: Move): Observable<number> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = move;
        
        console.log('submitting,\n' + body)
        return this.http.post(this.selectMoveURL, body, options)
                        .map(this.extractNumber)
                        .catch(this.handleError);
    }

    private extractNumber(res: Response){
        let body = res.json();
        console.log('extractNumber');
        console.log(body);
        return body;
    }

    private extractData(res: Response) {
        let body = res.json();
        console.log(body);
        return new PlayResult(body.id, body.playerMove, body.compMove, body.win);
    }

    private handleError (error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
        errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
