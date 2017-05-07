import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import  'rxjs/add/operator/map';

@Injectable()

export class PostsService {
    constructor(private http: Http) {

        console.log('PostsService');
    }

    getPosts( ) {
        return this.http.get('https://colossustest.herokuapp.com/api/items.json').map (

            res => res.json()

        );

    }


}




