import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import  'rxjs/add/operator/map';
import {Router, ActivatedRoute, Params,} from '@angular/router';

@Injectable()

export class PostCheckoutService {
     finalUrl : string;
    ref: string;
    constructor(private http: Http,private activatedRoute: ActivatedRoute, private router: Router) {
        console.log('PostItemService' );
    }

    getPost(parameter: Object ) {
       
       return this.http.post('https://colossustest.herokuapp.com/api/items.json',parameter).map (
                    res => res.json()
       );
        
       
     }


}




